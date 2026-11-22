// The line: one continuous stroke of ink that the reader draws down the page by
// scrolling, and follows.
//
// - One gesture. build() threads a single curve through the page in big, confident
//   sweeps, with a loop here and there, passing behind the content.
// - RULE: never a straight line. build() measures the curve and, only where a
//   stretch would run straight, makes it sway until none does (see meander and bows).
// - One even weight, like a marker, with round ends. It is a stroked path.
// - Scroll is the hand. Nothing is drawn until the reader scrolls: at the top the
//   stroke is at its starting point and cannot be seen. Scrolling draws the line
//   while the page holds still; only when the tip reaches the bottom of the screen
//   does the page move down to make room, and then the line carries on (see plan).
//   So this file also moves the page: it sits in a fixed stage, and the scroll
//   position is turned into how much is drawn and how far down the page is.
//   What has been drawn stays, and scrolling back up undraws it. It ends by running
//   off the bottom of the page.
// - It reaches water. Once the line has run off the bottom of the page, scrolling on
//   makes that blue rise from the bottom until the whole contact section is under it.
//   Where the line meets the surface it swells out into the water, as if growing into
//   it. The contact text is only ever seen under water: each piece appears, in the
//   colour of the paper, once the surface has risen over it.
// - Type follows the line. Elements marked .r appear as the tip passes them
//   (or straight away, with data-cue="start").
(() => {
    'use strict';

    const DRAW = 0.22;        // scroll (px) it takes to draw 1px of line
    const MOVE = 0.7;         // scroll (px) it takes to move the page down 1px
    const BOTTOM = 0.95;      // the page moves when the tip gets this far down the screen…
    const ADVANCE = 0.6;      // …by this much of the screen's height
    const CREEP = 70;         // the line still creeps on this far (px) while the page moves
    const FLOOD = 0.45;       // scroll (in screen heights) it takes the water to rise at the end
    const STEP = 5;           // spacing of the points along the line
    const CHUNK = 480;        // drawn ink is kept in pieces this long, so only the tip is redrawn
    const TIP = 110;          // length of the tapered tip…
    const TIP_MAX = 260;      // …which stretches when the brush moves fast

    // The rule: over any stretch this long, the line must bow away from the straight
    // path between its ends by at least this much
    const STRETCH = 300;
    const BOW = 5;

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const lerp = (a, b, t) => a + (b - a) * t;

    // Repeatable randomness, so the line is the same on every visit
    function random(seed) {
        return () => {
            seed = (seed + 0x6D2B79F5) | 0;
            let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // A Catmull-Rom curve through the waypoints, sampled densely
    function curve(way) {
        const out = [way[0]];
        const at = i => way[clamp(i, 0, way.length - 1)];
        for (let i = 0; i < way.length - 1; i++) {
            const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
            const n = Math.max(4, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 4));
            for (let k = 1; k <= n; k++) {
                const t = k / n;
                const t2 = t * t;
                const t3 = t2 * t;
                out.push([0, 1].map(a => 0.5 * (
                    2 * p1[a] + (p2[a] - p0[a]) * t
                    + (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t2
                    + (3 * p1[a] - p0[a] - 3 * p2[a] + p3[a]) * t3
                )));
            }
        }
        return out;
    }

    // Points at an even spacing along a polyline
    function resample(pts, step) {
        const out = [pts[0]];
        let carry = 0;
        for (let i = 1; i < pts.length; i++) {
            const [x0, y0] = pts[i - 1];
            const [x1, y1] = pts[i];
            const d = Math.hypot(x1 - x0, y1 - y0);
            let at = step - carry;
            while (at <= d) {
                out.push([lerp(x0, x1, at / d), lerp(y0, y1, at / d)]);
                at += step;
            }
            carry = d - (at - step);
        }
        return out;
    }

    // Stabilisation: each point settles towards the average of its neighbours
    function relax(pts, radius, passes) {
        for (let pass = 0; pass < passes; pass++) {
            pts = pts.map((p, i) => {
                const r = Math.min(radius, i, pts.length - 1 - i);
                let x = 0;
                let y = 0;
                for (let k = i - r; k <= i + r; k++) { x += pts[k][0]; y += pts[k][1]; }
                return [x / (2 * r + 1), y / (2 * r + 1)];
            });
        }
        return pts;
    }

    // A smooth wandering value between -1 and 1
    function wander(seed) {
        const rnd = random(seed);
        const values = Array.from({ length: 256 }, () => rnd() * 2 - 1);
        return x => {
            const i = Math.floor(x);
            const t = x - i;
            const k = t * t * (3 - 2 * t);
            return lerp(values[i & 255], values[(i + 1) & 255], k);
        };
    }

    // Makes the line meander: every point is pushed to one side and then the other in a
    // slow wave, whose reach and length both drift, so that it swings even where the
    // curve it follows would have run straight
    function meander(pts, reach, length, weight) {
        const drift = wander(21);
        const swell = wander(34);
        let arc = 0;
        let phase = 0;
        return pts.map((p, i) => {
            const a = pts[Math.max(0, i - 3)];
            const b = pts[Math.min(pts.length - 1, i + 3)];
            const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
            if (i) {
                const step = Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]);
                arc += step;
                phase += (step / length) * (1 + 0.3 * drift(arc / (length * 2.3)));
            }
            const push = weight[i] * reach * (0.8 + 0.3 * swell(arc / (length * 1.7))) * Math.sin(phase * Math.PI * 2);
            return [p[0] - ((b[1] - a[1]) / d) * push, p[1] + ((b[0] - a[0]) / d) * push];
        });
    }

    // How straight the line is around each point: the smallest bow, in px, of any
    // STRETCH-long run through it away from the straight path between that run's ends
    function bows(pts) {
        const span = Math.round(STRETCH / STEP);
        const out = new Float32Array(pts.length).fill(Infinity);
        for (let i = 0; i + span < pts.length; i += 4) {
            const [ax, ay] = pts[i];
            const [bx, by] = pts[i + span];
            const d = Math.hypot(bx - ax, by - ay) || 1;
            let bow = 0;
            for (let k = i + 1; k < i + span; k++) {
                bow = Math.max(bow, Math.abs((pts[k][0] - ax) * (by - ay) - (pts[k][1] - ay) * (bx - ax)) / d);
            }
            for (let k = i; k <= i + span; k++) if (bow < out[k]) out[k] = bow;
        }
        return out;
    }

    // …and of its straightest stretch
    function flattest(pts) {
        return bows(pts).reduce((least, bow) => Math.min(least, bow), Infinity);
    }

    // ---------------------------------------------------------------------------
    // State
    // ---------------------------------------------------------------------------

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    let page = null;
    let ink = null;           // <g> holding the drawn pieces
    let tipEl = null;         // <path> for the stretch being drawn
    let pieces = [];          // the drawn pieces, in order
    let shownPieces = 0;

    let S = null;             // the line: { n, x, y, len, nx, ny, hw, L }
    let keys = [];            // the plan: { at: scroll, arc: line drawn, cam: page position, moving }
    let camera = 0;           // how far down the page is, px
    let moved = -1;
    let waterEl = null;       // <path> for the water
    let mouthEl = null;       // <path> for where the line swells into it
    let water = null;         // { top, bottom, width, text: [{ el, y }] }, in page px
    let flood = 0;            // how far the water has risen, 0–1
    let cues = [];            // elements to reveal, by the distance along the line
    let cueIndex = 0;
    let speed = 1200;         // how fast it draws on its own, px/s
    let geo = { w: 0, h: 0 }; // the viewport the line was laid out for

    let last = 0;
    let head = 0;
    let velocity = 0;
    let idle = 0;
    let lean = 0;
    let tipLength = TIP;
    let drawnAt = -1;

    // ---------------------------------------------------------------------------
    // The line, laid out from the content
    // ---------------------------------------------------------------------------

    function build() {
        const $ = sel => page.querySelector(sel);
        const $$ = sel => [...page.querySelectorAll(sel)];
        if (!$('.bio')) return;

        // Measure where things really sit, without the reveal offsets
        root.classList.add('measuring');
        const origin = page.getBoundingClientRect();
        const box = el => {
            const b = el.getBoundingClientRect();
            return {
                l: b.left - origin.left, r: b.right - origin.left, t: b.top - origin.top, b: b.bottom - origin.top,
                w: b.width, h: b.height,
            };
        };

        const W = page.clientWidth;
        if (W !== geo.w) geo = { w: W, h: window.innerHeight };   // mobile toolbars sliding do not move the line
        const H = geo.h;
        const bottom = page.offsetHeight;

        // The water fills the contact section; each piece of its text appears once the
        // surface is well over it
        water = {
            top: box($('#contact')).t,
            bottom,
            width: W,
            swell: clamp(W * 0.05, 30, 80),   // how far the line spreads where it meets the water
            text: $$('#contact .eyebrow, .contact-email, .contact-links a').map(el => ({ el, y: box(el).t - 16 })),
        };
        const gutter = box($('.container')).l;
        const edge = gutter * 0.45;                 // where it runs when there is no room beside the content
        const rnd = random(7);
        const jitter = amount => (rnd() * 2 - 1) * amount;
        speed = clamp(W * 1.1, 700, 1700);

        const way = [];
        const to = (x, y) => way.push([x, y]);
        // A loop: round a circle from angle `from`, a quarter turn at a time
        const loop = (cx, cy, r, from, turn, quarters) => {
            for (let k = 0; k <= quarters; k++) {
                const a = from + turn * k * Math.PI / 2;
                to(cx + r * Math.cos(a), cy + r * Math.sin(a));
            }
        };

        // ── Bio: in from the top, winding down beside the text, then away underneath it ──
        const bio = box($('.bio'));
        const about = box($('#about'));
        const room = W - bio.r;
        if (room > 280) {
            const x = k => bio.r + room * k;
            const r = Math.min(room * 0.17, H * 0.14);
            to(x(0.62), -80);
            to(x(0.92), H * 0.2);
            loop(x(0.5), H * 0.5, r, 0, 1, 4);
            to(bio.l + bio.w * 0.85, Math.min(bio.b + H * 0.15, H * 0.93));
            to(bio.l + bio.w * 0.1, Math.min(bio.b + H * 0.2, about.b - 10));
        } else {
            // No room beside the text: a wave across the top, then down the edge
            const top = Math.max(bio.t, 120);
            to(W + 80, top * 0.3);
            to(W * 0.66, top * 0.66);
            to(W * 0.3, top * 0.4);
            to(edge, top + 30);
            to(edge * 0.7, lerp(bio.t, bio.b, 0.5));
            to(edge * 1.3, bio.b + 10);
        }

        // ── Portfolio: it winds from side to side behind the cards, showing either side of them ──
        const works = box($('.works'));
        const margin = works.l > 200 ? works.l * 0.5 : edge;
        const waves = Math.max(2, Math.round(works.h / (H * 0.5)));
        for (let k = 0; k < waves; k++) {
            const side = k % 2 ? -1 : 1;
            const x = W / 2 + side * (W / 2 - margin);
            const y = works.t + ((k + 0.5) * works.h) / waves;
            if (works.l > 200 && k % 3 === 1) loop(x, y, Math.min(works.l * 0.3, 90), -Math.PI / 2, side, 6);
            else to(x + jitter(margin * 0.35), y + jitter(H * 0.04));
        }

        // ── Contact: in from the side, a wave under the address, and off the bottom of the page ──
        const mail = box($('.contact-email'));
        const size = parseFloat(getComputedStyle($('.contact-email')).fontSize);
        const label = box($('#contact .eyebrow'));
        const outX = clamp(Math.max(mail.r + W * 0.1, W * 0.6), 0, W - edge);
        to(Math.max(mail.l - gutter * 0.7, 5), label.t - H * 0.06);
        to(Math.max(mail.l - gutter * 0.5, 7), mail.b - size * 0.2);
        to(mail.l + mail.w * 0.14, mail.b + size * 0.45);
        to(mail.l + mail.w * 0.5, mail.b + size * 0.3);
        to(mail.l + mail.w * 0.86, mail.b + size * 0.5);
        to(outX, lerp(mail.b, bottom, 0.3));
        to(outX - W * 0.07, lerp(mail.b, bottom, 0.66));
        to(outX + W * 0.02, bottom + 40);

        // Curve → even spacing → stabilised → made to meander → stabilised again.
        // Then the rule is checked: while any stretch still runs straight, it meanders more.
        const base = resample(relax(resample(curve(way), STEP), 8, 2), STEP);
        // The sweeps are left as they are, except where a stretch runs straight: there,
        // and only there, the line is made to sway, until the rule holds everywhere.
        const length = clamp(W * 0.3, 220, 420);
        const sway = meander(base, 1, length, new Float32Array(base.length).fill(1))
            .map((p, i) => [p[0] - base[i][0], p[1] - base[i][1]]);
        const amount = new Float32Array(base.length);
        let pts = base;
        for (let attempt = 0; attempt < 12; attempt++) {
            const bow = bows(pts);
            if (bow.every(b => b >= BOW + 1)) break;
            const need = relax(Array.from(bow, b => [clamp((BOW * 2.4 - b) / (BOW * 1.4)), 0]), 30, 2);
            pts = base.map((p, i) => {
                amount[i] += 6 * need[i][0];
                return [p[0] + sway[i][0] * amount[i], p[1] + sway[i][1] * amount[i]];
            });
        }
        pts = resample(pts, STEP);

        const n = pts.length;
        const s = { n, x: new Float32Array(n), y: new Float32Array(n), len: new Float32Array(n), nx: new Float32Array(n), ny: new Float32Array(n), hw: new Float32Array(n) };
        for (let i = 0; i < n; i++) {
            s.x[i] = pts[i][0];
            s.y[i] = pts[i][1];
            if (i) s.len[i] = s.len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        }
        s.L = s.len[n - 1];

        // One even weight all the way, like a marker
        const weight = clamp(W * 0.01, 7, 15);
        for (let i = 0; i < n; i++) {
            const a = Math.max(0, i - 2);
            const b = Math.min(n - 1, i + 2);
            const d = Math.hypot(s.x[b] - s.x[a], s.y[b] - s.y[a]) || 1;
            s.nx[i] = -(s.y[b] - s.y[a]) / d;
            s.ny[i] = (s.x[b] - s.x[a]) / d;
            s.hw[i] = weight / 2;
        }
        ink.style.strokeWidth = tipEl.style.strokeWidth = weight;
        S = s;

        // The drawn ink, piece by piece (only the pieces behind the tip are shown)
        ink.replaceChildren();
        pieces = [];
        for (let k = 0; (k + 1) * CHUNK <= s.L; k++) {
            const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            el.setAttribute('d', outline(indexAt(k * CHUNK), Math.min(n - 1, indexAt((k + 1) * CHUNK) + 1), Infinity));
            el.style.display = 'none';
            ink.appendChild(el);
            pieces.push(el);
        }
        shownPieces = 0;
        drawnAt = -1;

        // What appears when: each .r element is revealed as the tip first comes close to it
        cues = $$('.r').map(el => {
            if (el.dataset.cue === 'start') return { el, arc: 0 };
            const b = box(el);
            const away = i => Math.hypot(Math.max(b.l - s.x[i], 0, s.x[i] - b.r), Math.max(b.t - s.y[i], 0, s.y[i] - b.b));
            let near = Infinity;
            for (let i = 0; i < n; i += 2) near = Math.min(near, away(i));
            let first = 0;
            while (first < n - 2 && away(first) > near + 30) first += 2;
            return { el, arc: s.len[first] };
        }).sort((a, b) => a.arc - b.arc);
        cueIndex = 0;
        root.classList.remove('measuring');

        plan();
    }

    // Last point at or before distance `arc` along the line
    function indexAt(arc) {
        let lo = 0;
        let hi = S.n - 1;
        while (lo < hi) {
            const m = (lo + hi + 1) >> 1;
            if (S.len[m] <= arc) lo = m;
            else hi = m - 1;
        }
        return lo;
    }

    // The line between two points, to be stroked. With `tipAt`, it ends at exactly that
    // distance along it.
    function outline(i0, i1, tipAt) {
        const f = v => v.toFixed(1);
        let d = '';
        for (let i = i0; i <= i1; i++) d += `${i === i0 ? 'M' : 'L'}${f(S.x[i])} ${f(S.y[i])}`;
        if (tipAt !== Infinity && i1 < S.n - 1) {
            const k = clamp((tipAt - S.len[i1]) / (S.len[i1 + 1] - S.len[i1]));
            d += `L${f(lerp(S.x[i1], S.x[i1 + 1], k))} ${f(lerp(S.y[i1], S.y[i1 + 1], k))}`;
        }
        return d;
    }

    // The plan: what each scroll position means. It alternates between two things.
    // Drawing: the page holds still and scrolling draws the line across the screen.
    // Moving: once the tip is at the bottom of the screen, scrolling moves the page down
    // to make room (and the line only creeps), until the page can go no further.
    function plan() {
        if (!S) return;
        const H = window.innerHeight;
        const lowest = Math.max(0, page.offsetHeight - H);
        keys = [{ at: 0, arc: 0, cam: 0 }];
        let at = 0;
        let cam = 0;
        let i = 0;
        while (i < S.n - 1) {
            let j = i;
            while (j < S.n - 1 && (cam >= lowest - 0.5 || S.y[j] - cam < BOTTOM * H)) j++;
            if (j > i) {
                at += (S.len[j] - S.len[i]) * DRAW;
                keys.push({ at, arc: S.len[j], cam });
            }
            if (j >= S.n - 1) break;

            const next = Math.min(lowest, cam + ADVANCE * H);
            const arc = Math.min(S.L, S.len[j] + CREEP);
            at += (next - cam) * MOVE;
            keys.push({ at, arc, cam: next, moving: true });
            cam = next;
            i = indexAt(arc);
        }

        // And at the very end, with the line off the bottom of the page: the water rises
        at += FLOOD * H;
        keys.push({ at, arc: S.L, cam, flood: true });

        // The scrollbar is as long as the plan
        document.querySelector('.scroll-space').style.height = `${keys[keys.length - 1].at + H}px`;
    }

    // Line drawn and page position for a scroll position
    function stateFor(scroll) {
        if (scroll <= 0) return { arc: 0, cam: 0, flood: 0 };   // at the top, nothing has been drawn
        let k = 1;
        while (k < keys.length - 1 && keys[k].at < scroll) k++;
        const a = keys[k - 1];
        const b = keys[k];
        const t = clamp((scroll - a.at) / (b.at - a.at || 1));
        return { arc: lerp(a.arc, b.arc, t), cam: lerp(a.cam, b.cam, b.moving ? t * t * (3 - 2 * t) : 0), flood: b.flood ? t : 0 };
    }

    // How far down the page may be once `arc` px of line have actually been drawn: it does
    // not move until the tip is at the bottom of the screen, however far the scroll has got
    function camFor(arc) {
        if (arc >= S.L - 0.5) return keys[keys.length - 1].cam;
        let k = 1;
        while (k < keys.length - 1 && keys[k].arc <= arc) k++;
        const a = keys[k - 1];
        const b = keys[k];
        if (!b.moving) return a.cam;
        const t = clamp((arc - a.arc) / (b.arc - a.arc || 1));
        return lerp(a.cam, b.cam, t * t * (3 - 2 * t));
    }

    // The water: a body of the line's blue with a surface that is never still or straight.
    // It rises from below the page to the top of the contact section.
    function drawWater(now) {
        if (flood <= 0.001) {
            if (waterEl.getAttribute('d')) {
                waterEl.setAttribute('d', '');
                mouthEl.setAttribute('d', '');
            }
            water.text.forEach(({ el }) => el.classList.remove('wet'));
            return;
        }

        const rise = flood * flood * (3 - 2 * flood);
        const swell = lerp(18, 7, rise);
        const t = reduced ? 0 : now / 1000;
        const surface = lerp(water.bottom + swell * 2, water.top, rise);
        let d = '';
        for (let x = -30; x <= water.width + 30; x += 24) {
            const y = surface + swell * Math.sin(x / 170 + t * 0.9) + swell * 0.5 * Math.sin(x / 67 - t * 0.6);
            d += `${d ? 'L' : 'M'}${x} ${y.toFixed(1)}`;
        }
        d += `L${water.width + 30} ${water.bottom + 60}L-30 ${water.bottom + 60}Z`;

        waterEl.setAttribute('d', d);
        mouthEl.setAttribute('d', mouth(surface + swell));
        water.text.forEach(({ el, y }) => el.classList.toggle('wet', y > surface + swell * 1.5));
    }

    // Where the line goes into the water it grows into it: over its last stretch above
    // the surface it swells out, slowly and then all at once, like a river at its mouth
    function mouth(surface) {
        let at = S.n - 1;
        while (at > 0 && S.y[at - 1] >= surface) at--;        // where it goes under for good
        const reach = water.swell * 3.2;
        let from = at;
        while (from > 0 && S.len[at] - S.len[from] < reach) from--;
        if (at - from < 4) return '';

        // It spreads sideways, the way the surface lies, and carries on down under it
        const f = v => v.toFixed(1);
        let there = '';
        let back = '';
        let half = 0;
        for (let i = from; i <= at; i++) {
            const near = clamp(1 - (S.len[at] - S.len[i]) / reach);
            half = S.hw[i] + water.swell * Math.pow(near, 2.6);
            there += `${i === from ? 'M' : 'L'}${f(S.x[i] + half)} ${f(S.y[i])}`;
            back = `L${f(S.x[i] - half)} ${f(S.y[i])}${back}`;
        }
        const under = S.y[at] + 50;
        return `${there}L${f(S.x[at] + half)} ${f(under)}L${f(S.x[at] - half)} ${f(under)}${back}Z`;
    }

    // The scroll position at which the page is first `cam` px down
    function scrollFor(cam) {
        if (cam <= 0) return 0;
        for (let k = 1; k < keys.length; k++) {
            if (keys[k].cam >= cam) {
                const a = keys[k - 1];
                return lerp(a.at, keys[k].at, clamp((cam - a.cam) / (keys[k].cam - a.cam || 1)));
            }
        }
        return keys[keys.length - 1].at;
    }

    // ---------------------------------------------------------------------------
    // Motion
    // ---------------------------------------------------------------------------

    function settle() {
        const now = stateFor(window.scrollY);
        head = now.arc;
        camera = now.cam;
        flood = now.flood;
        velocity = 0;
        idle = 0;
        lean = 0;
    }

    function frame(now) {
        requestAnimationFrame(frame);
        if (!S) return;
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;

        const wanted = stateFor(window.scrollY);
        const target = wanted.arc;
        let shown = head;

        // The page glides to where the scroll wants it, but never ahead of the line: it
        // waits for the tip (as drawn, which trails the scroll) to reach the bottom of the screen
        const cam = Math.min(wanted.cam, camFor(head));
        camera = reduced || Math.abs(cam - camera) < 0.3
            ? cam
            : camera + (cam - camera) * (1 - Math.exp(-dt * 9));
        if (camera !== moved) {
            moved = camera;
            page.style.transform = `translate3d(0, ${-camera.toFixed(2)}px, 0)`;
            window.GuideLine.onMove?.(camera);
        }

        if (reduced) {
            head = shown = target;
        } else {
            // The tip is drawn along behind where the scroll wants it, as if on a string:
            // it gathers speed, glides, and settles, and only hurries when far behind
            const gap = target - head;
            const resting = Math.abs(gap) < 1 && Math.abs(velocity) < 4;
            const pace = speed + Math.max(0, Math.abs(gap) - speed * 1.5) * 3;
            const want = clamp(gap * 5.5, -pace, pace);
            velocity += (want - velocity) * (1 - Math.exp(-dt * 7));
            const next = head + velocity * dt;
            if (Math.abs(gap) < 0.3 || (target - next) * gap < 0) {
                head = target;
                velocity = 0;
            } else {
                head = next;
            }

            // At rest it never goes quite still: it leans on, breathes, and now and then
            // makes a small move towards what comes next. Not at its starting point, though:
            // there it stays out of sight.
            idle = resting ? idle + dt : 0;
            let wantLean = 0;
            if (resting && head > 1 && head < S.L - 1) {
                wantLean = 12 * (1 - Math.exp(-idle / 1.5)) + 3 * Math.sin(idle * 1.5);
                const beat = ((idle - 3) % 6) / 1.1;
                if (idle > 3 && beat < 1) wantLean += 34 * Math.sin(Math.PI * Math.pow(beat, 0.6));
            }
            lean += (wantLean - lean) * (1 - Math.exp(-dt * 8));
            if (target <= 0 && head <= 0) lean = 0;
            shown = clamp(head + lean, 0, S.L);
        }

        // The faster it moves, the longer and finer the tip
        const wantTip = clamp(TIP + Math.abs(velocity) * 0.08, TIP, TIP_MAX);
        tipLength += (wantTip - tipLength) * (1 - Math.exp(-dt * 6));

        if (Math.abs(shown - drawnAt) > 0.05 || Math.abs(wantTip - tipLength) > 0.5) {
            drawnAt = shown;

            // Everything well behind the tip is already drawn; only the last stretch is redrawn
            const done = clamp(Math.floor((shown - TIP_MAX) / CHUNK), 0, pieces.length);
            while (shownPieces < done) pieces[shownPieces++].style.display = '';
            while (shownPieces > done) pieces[--shownPieces].style.display = 'none';
            tipEl.setAttribute('d', shown > 1 ? outline(indexAt(done * CHUNK), indexAt(shown), shown) : '');
        }

        while (cueIndex < cues.length && cues[cueIndex].arc <= shown + 1) cues[cueIndex++].el.classList.add('on');

        // The water rises only once the line has got there
        const wet = head >= S.L - 1 ? wanted.flood : 0;
        flood = reduced || Math.abs(wet - flood) < 0.002 ? wet : flood + (wet - flood) * (1 - Math.exp(-dt * 7));
        drawWater(now);
    }

    // ---------------------------------------------------------------------------
    // Public
    // ---------------------------------------------------------------------------

    window.GuideLine = {
        // The rule, measured on the line as drawn: the bow (px) of its straightest stretch
        straightest: () => flattest(Array.from({ length: S.n }, (_, i) => [S.x[i], S.y[i]])),

        // Call once the content is in the page
        init(pageEl) {
            page = pageEl;
            ink = page.querySelector('.guide-line .ink');
            tipEl = page.querySelector('.guide-line .tip');
            waterEl = page.querySelector('.guide-line .water');
            mouthEl = page.querySelector('.guide-line .mouth');
            if (!reduced) root.classList.add('motion');
            build();

            last = performance.now();
            settle();
            requestAnimationFrame(frame);

            // Lay the line out again whenever the content moves
            let timer;
            let size = `${page.clientWidth}x${page.scrollHeight}`;
            new ResizeObserver(() => {
                const now = `${page.clientWidth}x${page.scrollHeight}`;
                if (now === size) return;
                size = now;
                clearTimeout(timer);
                timer = setTimeout(() => this.rebuild(), 150);
            }).observe(page);
            window.addEventListener('resize', () => plan());

            // Nothing inside the stage scrolls on its own (e.g. when a link in it takes focus)
            const stage = page.parentElement;
            stage.addEventListener('scroll', () => { stage.scrollTop = 0; });
        },

        // How far down the page is (px), and the scroll position that puts it `cam` px down
        camera: () => camera,
        scrollFor,
        lowest: () => Math.max(0, page.offsetHeight - window.innerHeight),

        // Call after jumping to a scroll position, to be there at once
        settle,

        // Call after the content changes (it picks up where the reader is)
        rebuild() {
            if (!page) return;
            build();
            settle();
        },
    };
})();
