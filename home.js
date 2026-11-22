// The home page: one long strip laid out sideways (bio, each project, contact) that the
// reader travels along by scrolling, led by one line that runs ahead the whole way.

// Application State
let currentSection = null;   // the section on screen
let language = 'en';

// Content Data
const sections = [
    { id: 'about', name: { en: 'About', fr: 'À Propos' }, icon: 'user' },
    { id: 'portfolio', name: { en: 'Portfolio', fr: 'Portfolio' }, icon: 'briefcase' },
    { id: 'contact', name: { en: 'Contact', fr: 'Contact' }, icon: 'message-circle' },
];

const portfolioItems = {
    en: [
        {
            title: 'README Club',
            category: 'UX Design Case Study + Full-Stack Application',
            description: 'Designing a social reading experience that helps book clubs discover, vote, and engage around shared reading goals.',
            tags: ['UX Research', 'User Flow', 'Product Design', 'React', 'Firebase'],
            image: 'images/book-club.png',
            liveLink: 'https://aria-vero-s.github.io/book-club/',
            githubLink: 'https://github.com/Aria-vero-s/book-club',
            icon: 'book-open',
            slug: 'book-club',
            featured: true,
        },
        {
            title: 'BigWatts',
            category: 'Green Energy Marketplace — UX & Full-Stack Product',
            description: 'Designing a marketplace connecting homeowners with certified renewable energy providers through trust-focused user experiences.',
            tags: ['Product Design', 'UX/UI', 'React', 'Django', 'PostgreSQL'],
            image: 'images/bigwatts.png',
            liveLink: 'https://bigwatts.vercel.app/',
            githubLink: 'https://github.com/ariastoryreport-wq/bigwatts',
            icon: 'zap',
            slug: 'bigwatts',
            featured: true,
        },
        {
            title: 'Music Festival',
            category: 'Website Redesign — UI Design & WordPress',
            description: 'A visual redesign focused on improving navigation, storytelling, and event discovery for an annual music festival.',
            tags: ['UI Design', 'Visual Design', 'WordPress', 'UX'],
            image: 'images/music-festival.png',
            liveLink: 'https://fmclacbaker.com',
            githubLink: '',
            icon: 'music',
            slug: 'music-festival',
            featured: true,
        },
        {
            title: 'C Arcade Game',
            category: 'Systems Programming',
            description: 'Retro arcade game developed in C, demonstrating programming fundamentals and problem solving.',
            tags: ['C', 'Systems Programming', '42 School'],
            image: 'images/game.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/so_long',
            icon: 'code',
            slug: 'arcade-game',
            featured: false,
        },
        {
            title: 'Linear Regression AI Project',
            category: 'Machine Learning',
            description: 'Machine learning exploration project focused on understanding AI fundamentals.',
            tags: ['Python', 'AI', '42 School'],
            image: '',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/linear-regression',
            icon: 'brain',
            slug: 'linear-regression',
            featured: false,
        },
    ],
    fr: [
        {
            title: 'README Club',
            category: 'Étude de Cas UX + Application Full-Stack',
            description: 'Conception d\'une expérience de lecture sociale permettant aux clubs de livres de découvrir, voter et s\'engager autour d\'objectifs de lecture communs.',
            tags: ['Recherche UX', 'Parcours Utilisateur', 'Product Design', 'React', 'Firebase'],
            image: 'images/book-club.png',
            liveLink: 'https://aria-vero-s.github.io/book-club/',
            githubLink: 'https://github.com/Aria-vero-s/book-club',
            icon: 'book-open',
            slug: 'book-club',
            featured: true,
        },
        {
            title: 'BigWatts',
            category: 'Marketplace Énergie Verte — UX & Produit Full-Stack',
            description: 'Conception d\'une marketplace connectant des propriétaires avec des prestataires d\'énergie renouvelable certifiés via des expériences centrées sur la confiance.',
            tags: ['Product Design', 'UX/UI', 'React', 'Django', 'PostgreSQL'],
            image: 'images/bigwatts.png',
            liveLink: 'https://bigwatts.vercel.app/',
            githubLink: 'https://github.com/ariastoryreport-wq/bigwatts',
            icon: 'zap',
            slug: 'bigwatts',
            featured: true,
        },
        {
            title: 'Festival de Musique',
            category: 'Refonte de Site Web — UI Design & WordPress',
            description: 'Une refonte visuelle axée sur l\'amélioration de la navigation, de la narration et de la découverte des événements pour un festival de musique annuel.',
            tags: ['UI Design', 'Design Visuel', 'WordPress', 'UX'],
            image: 'images/music-festival.png',
            liveLink: 'https://fmclacbaker.com',
            githubLink: '',
            icon: 'music',
            slug: 'music-festival',
            featured: true,
        },
        {
            title: 'Jeu d\'Arcade en C',
            category: 'Programmation Système',
            description: 'Jeu d\'arcade rétro développé en C, démontrant les fondamentaux de la programmation et la résolution de problèmes.',
            tags: ['C', 'Programmation Système', 'École 42'],
            image: 'images/game.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/so_long',
            icon: 'code',
            slug: 'arcade-game',
            featured: false,
        },
        {
            title: 'Projet IA Régression Linéaire',
            category: 'Machine Learning',
            description: 'Projet d\'exploration en machine learning axé sur la compréhension des fondamentaux de l\'IA.',
            tags: ['Python', 'IA', 'École 42'],
            image: '',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/linear-regression',
            icon: 'brain',
            slug: 'linear-regression',
            featured: false,
        },
    ]
};

const content = {
    en: {
        bio: {
            statement: 'I\'m Ariane, a UI/UX designer and web developer based in Paris. I design and build interfaces for complex tools, currently at Air France while studying at École 42. Originally from Canada, I was a musician and a teacher before I became a designer.',
        },
        contact: {
            links: [
                { name: 'GitHub', url: 'https://github.com/aria-vero-s' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/ariane-saulnier' },
                { name: 'Behance', url: 'https://behance.net/arianesaulnier' },
            ],
        },
    },
    fr: {
        bio: {
            statement: 'Je suis Ariane, designer UI/UX et développeuse web à Paris. Je conçois et développe des interfaces pour des outils complexes, en ce moment chez Air France, en parallèle de mes études à l\'École 42. Originaire du Canada, j\'ai été musicienne et enseignante avant de devenir designer.',
        },
        contact: {
            links: [
                { name: 'GitHub', url: 'https://github.com/aria-vero-s' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/ariane-saulnier' },
                { name: 'Behance', url: 'https://behance.net/arianesaulnier' },
            ],
        },
    },
};

const EMAIL = 'ariane.saulnier@gmail.com';

// Update navigation labels
function updateNavigation() {
    sections.forEach(section => {
        const button = document.querySelector(`.nav-button[data-section="${section.id}"]`);
        if (!button) return;
        button.classList.toggle('active', section.id === currentSection);
        const textSpan = button.querySelector('.nav-text');
        if (textSpan) textSpan.innerHTML = createKineticText(section.name[language]);
    });

    // Update language button
    const langButton = document.querySelector('.language-toggle .nav-text');
    if (langButton) {
        langButton.innerHTML = createKineticText(
            language === 'en' ? 'FR' : 'EN'
        );
    }
}

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambleNavText(element) {
    if (element.dataset.scrambling === "true") return;

    element.dataset.scrambling = "true";

    const letters = [...element.querySelectorAll(".nav-letter")]
    .filter(letter => !letter.classList.contains("space"));

    const original = [...letters].map(letter => letter.dataset.char || " ");

    let frame = 0;
    const totalFrames = 18;

    letters.forEach(letter => {
        letter.classList.add("scrambling");
    });

    const interval = setInterval(() => {

        letters.forEach((letter, index) => {

            const progress = frame / totalFrames;

            if (progress > index / letters.length) {
                letter.textContent = original[index];
            } else {
                letter.textContent =
                    scrambleChars[
                        Math.floor(Math.random() * scrambleChars.length)
                    ];
            }

        });

        frame++;

        if (frame >= totalFrames) {
            clearInterval(interval);

            letters.forEach((letter, index) => {
                letter.textContent = original[index];
                letter.classList.remove("scrambling");
            });

            element.dataset.scrambling = "false";
        }

    }, 35);
}

function createKineticText(text) {
    return text
        .split("")
        .map(char => {
            if (char === " ") {
                return `<span class="nav-letter space">&nbsp;</span>`;
            }

            return `
                <span class="nav-letter" data-char="${char}">
                    ${char}
                </span>
            `;
        })
        .join("");
}

// ---------------------------------------------------------------------------
// The journey
// ---------------------------------------------------------------------------
//
// The page is one long strip laid out sideways: the bio, then each project, then the
// contact, with a long way between them. Scrolling travels along it, and one line
// travels ahead of the reader the whole way: slowly past each stop, far and fast
// between them, until it reaches the water at the end.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sectionName = (id) => sections.find(section => section.id === id).name[language];
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = t => { t = clamp(t); return t * t * (3 - 2 * t); };

const projectLink = (item) => {
    if (item.slug === 'book-club') return language === 'fr' ? 'projects/fr/book-club.html' : 'projects/book-club.html';
    if (item.slug === 'bigwatts' && language === 'fr') return 'projects/fr/bigwatts.html';
    return `projects/${item.slug}.html`;
};

function bioHTML() {
    const words = content[language].bio.statement.split(' ')
        .map((word, i) => `<span class="mask"><span style="--i: ${i}">${word}</span></span>`).join(' ');
    return `<section class="stop stop-bio" data-section="about"><h1 class="bio-statement">${words}</h1></section>`;
}

function projectHTML(item, i, all) {
    const count = n => String(n).padStart(2, '0');
    return `
        <section class="stop stop-project${i % 2 ? ' flip' : ''}" data-section="portfolio">
            <a class="project" href="${projectLink(item)}">
                <div class="project-media">
                    ${item.image ? `<img src="${item.image}" alt="">` : `<div class="project-icon"><i data-lucide="${item.icon}"></i></div>`}
                </div>
                <div class="project-text">
                    <p class="project-count">${count(i + 1)} / ${count(all.length)}</p>
                    <h2 class="project-title">${item.title}</h2>
                    <p class="project-category">${item.category}</p>
                    <p class="project-description">${item.description}</p>
                    <span class="project-cta">${language === 'fr' ? 'Voir le projet' : 'View project'} <span class="project-arrow">→</span></span>
                </div>
            </a>
        </section>
    `;
}

function contactHTML() {
    // The shore: the edge of the water, which keeps moving
    const shore = '<div class="shore" aria-hidden="true"><svg viewBox="0 0 60 2400" preserveAspectRatio="none"><path d="M60 0H30C8 150 8 300 30 450S52 750 30 900S8 1200 30 1350S52 1650 30 1800S8 2100 30 2250S40 2400 30 2400H60Z"/></svg></div>';
    return `
        <section class="stop stop-contact" data-section="contact">
            ${shore}
            <div class="contact">
                <p class="contact-label">${sectionName('contact')}</p>
                <a class="contact-email" href="mailto:${EMAIL}">${EMAIL}</a>
                <ul class="contact-links">
                    ${content[language].contact.links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener">${link.name}</a></li>`).join('')}
                </ul>
            </div>
        </section>
    `;
}

// ---------------------------------------------------------------------------
// The line
// ---------------------------------------------------------------------------
//
// One even stroke, drawn in long, smooth sweeps: it runs under one stop and over the
// next, and in the open stretches between them it swings the full height of the
// screen.
//
// RULE: never a straight line. The path is measured, and wherever a stretch would run
// straight it is made to sway, gently, until it does not (see neverStraight).

const TAU = Math.PI * 2;
const STEP = 6;         // spacing of the points along the line, px
const STRETCH = 300;    // the rule: over any stretch this long…
const BOW = 5;          // …the line must bow this far from the straight path between its ends
const LOW = 0.87;       // how far down the screen the line runs when it passes under a stop
const HIGH = 0.17;      // …and when it passes over one (below the nav)

// The points the line passes through, from the layout: under the bio, then over and
// under the projects in turn, and into the water
function waypoints(stops, w, h) {
    const way = [[-80, h * 0.8]];
    const rnd = (() => { let seed = 5; return () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; })();
    stops.forEach((stop, i) => {
        const low = i % 2 === 0;
        const band = (low ? LOW : w > h ? HIGH : HIGH - 0.04) * h;
        const drift = (low ? -1 : 1) * h * 0.035;
        if (i === stops.length - 1) {
            // The water: down from wherever it was, and in
            way.push([stop.left - w * 0.22, h * (low ? 0.8 : 0.2)], [stop.left + w * 0.02, h * 0.62], [stop.left + w * 0.2, h * 0.66]);
            return;
        }
        way.push([stop.left + w * 0.22, band + drift], [stop.left + w * 0.78, band - drift]);

        // The open stretch to the next stop: one long swing across the full height
        const from = stop.left + w;
        const gap = stops[i + 1].left - from;
        const mid = from + gap * (0.42 + rnd() * 0.16);
        way.push([mid - gap * 0.14, h * (low ? 0.74 : 0.26)], [mid + gap * 0.14, h * (low ? 0.26 : 0.74)]);
    });
    return way;
}

// A Catmull-Rom curve through the waypoints, as points at an even spacing
function curve(way) {
    const dense = [way[0]];
    const at = i => way[clamp(i, 0, way.length - 1)];
    for (let i = 0; i < way.length - 1; i++) {
        const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
        const n = Math.max(4, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 3));
        for (let k = 1; k <= n; k++) {
            const t = k / n;
            dense.push([0, 1].map(a => 0.5 * (
                2 * p1[a] + (p2[a] - p0[a]) * t
                + (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t * t
                + (3 * p1[a] - p0[a] - 3 * p2[a] + p3[a]) * t * t * t
            )));
        }
    }
    const out = [dense[0]];
    let carry = 0;
    for (let i = 1; i < dense.length; i++) {
        const [x0, y0] = dense[i - 1];
        const [x1, y1] = dense[i];
        const d = Math.hypot(x1 - x0, y1 - y0);
        let pos = STEP - carry;
        while (pos <= d) {
            out.push([x0 + (x1 - x0) * pos / d, y0 + (y1 - y0) * pos / d]);
            pos += STEP;
        }
        carry = d - (pos - STEP);
    }
    return out;
}

// How straight the line is around each point: the smallest bow, in px, of any
// STRETCH-long run through it away from the straight path between that run's ends
function bows(pts) {
    const span = Math.round(STRETCH / STEP);
    const out = new Float32Array(pts.length).fill(Infinity);
    for (let i = 0; i + span < pts.length; i += 3) {
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

// The rule, applied: where a stretch runs straight, and only there, the line sways
// in a long, slow wave, more and more until no stretch is straight
function neverStraight(base) {
    const n = base.length;
    const sway = base.map((p, i) => {
        const a = base[Math.max(0, i - 3)];
        const b = base[Math.min(n - 1, i + 3)];
        const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        const s = Math.sin((i * STEP / 420) * TAU);
        return [(-(b[1] - a[1]) / d) * s, ((b[0] - a[0]) / d) * s];
    });
    const amount = new Float32Array(n);
    let pts = base;
    for (let attempt = 0; attempt < 14; attempt++) {
        const bow = bows(pts);
        if (bow.every(b => b >= BOW + 1)) break;
        const need = Array.from(bow, b => clamp((BOW * 2.4 - b) / (BOW * 1.4)));
        pts = base.map((p, i) => {
            let sum = 0;
            let count = 0;
            for (let k = Math.max(0, i - 40); k <= Math.min(n - 1, i + 40); k += 5) { sum += need[k]; count++; }
            amount[i] += 5 * sum / count;
            return [p[0] + sway[i][0] * amount[i], p[1] + sway[i][1] * amount[i]];
        });
    }
    return pts;
}

// ---------------------------------------------------------------------------
// Travelling
// ---------------------------------------------------------------------------

const SLOW = 0.5;       // strip px travelled per px scrolled, passing a stop…
const FAST = 3.4;       // …and in the open stretches between them

let stops = [];         // { el, left, section }
let screen = { w: 0, h: 0 };
let line = null;        // { x, y, reach: furthest right so far, n, bow }
let table = [];         // scroll position for every 16px of the strip
let limit = 0;          // how far the strip can travel

let camera = 0;         // where the reader is along the strip, px
let head = 0;           // how much of the line is drawn, in points
let speed = 0;          // how fast the reader is travelling, px/s
let last = 0;

const el = id => document.getElementById(id);

function render() {
    const items = portfolioItems[language];
    el('strip').innerHTML = `<svg class="line" aria-hidden="true"><path></path></svg>${bioHTML()}${items.map(projectHTML).join('')}${contactHTML()}`;
    window.lucide?.createIcons();
    stops = [...document.querySelectorAll('.stop')].map((node, i) => {
        node.style.setProperty('--i', i);
        return { el: node, section: node.dataset.section };
    });
    layout();
}

// Where the stops are, the line through them, and what each scroll position means
function layout() {
    if (!stops.length) return;
    const stage = el('stage');
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    screen = { w, h };
    stops.forEach(stop => { stop.left = stop.el.offsetLeft; });
    limit = stops[stops.length - 1].left;

    const pts = neverStraight(curve(waypoints(stops, w, h)));
    const n = pts.length;
    line = { n, x: new Float32Array(n), y: new Float32Array(n), reach: new Float32Array(n) };
    pts.forEach((p, i) => {
        line.x[i] = p[0];
        line.y[i] = p[1];
        line.reach[i] = Math.max(p[0], i ? line.reach[i - 1] : -Infinity);
    });
    line.bow = bows(pts).reduce((least, b) => Math.min(least, b), Infinity);
    document.querySelector('.line path').style.strokeWidth = clamp(w * 0.0055, 4.5, 9);

    // Scroll → place: slow near a stop, fast in between. The pace is set against the
    // longer side of the screen, so a phone does not fly through it.
    const pace = w / Math.max(w, h * 0.9);
    table = [0];
    for (let x = 16; x <= limit + 16; x += 16) {
        const away = Math.min(...stops.map(stop => Math.abs(stop.left - x)));
        const rate = (SLOW + (FAST - SLOW) * smooth((away - w * 0.16) / (w * 0.4))) * pace;
        table.push(table[table.length - 1] + 16 / rate);
    }
    el('journey').style.height = `${Math.ceil(table[Math.floor(limit / 16)] + h)}px`;
    last = 0;
}

// The place along the strip for a scroll position, and back
function placeFor(scroll) {
    let lo = 0;
    let hi = Math.floor(limit / 16);
    while (lo < hi) {
        const m = (lo + hi + 1) >> 1;
        if (table[m] <= scroll) lo = m; else hi = m - 1;
    }
    const next = table[lo + 1] ?? table[lo];
    return Math.min(limit, (lo + (next > table[lo] ? (scroll - table[lo]) / (next - table[lo]) : 0)) * 16);
}

const scrollFor = place => {
    const i = Math.floor(place / 16);
    return table[i] + ((table[i + 1] ?? table[i]) - table[i]) * (place / 16 - i);
};

// How much of the line is drawn when its tip has got as far right as `x`
function pointsUpTo(x) {
    let lo = 0;
    let hi = line.n - 1;
    while (lo < hi) {
        const m = (lo + hi + 1) >> 1;
        if (line.reach[m] <= x) lo = m; else hi = m - 1;
    }
    return lo;
}

function frame(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    const { w } = screen;

    // The reader glides after the scroll
    const wanted = placeFor(window.scrollY);
    const before = camera;
    camera = reducedMotion || !dt || Math.abs(wanted - camera) < 0.3 ? wanted : camera + (wanted - camera) * (1 - Math.exp(-dt * 7));
    if (dt) speed += ((camera - before) / dt - speed) * 0.2;

    // The line runs ahead: nothing at the very start, then most of a screen in front,
    // and further the faster the reader goes. At the end it runs on into the water.
    const away = smooth(camera / (w * 0.3));
    const lead = away * w * 0.86 + clamp(speed * 0.14, 0, w * 0.22) - 80 * (1 - away);
    const target = camera >= limit - 2 ? line.n - 1 : camera < 1 ? 0 : pointsUpTo(camera + lead);
    head = reducedMotion || !dt ? target : head + (target - head) * (1 - Math.exp(-dt * 6));

    // Only the part of it on screen is drawn
    const path = document.querySelector('.line path');
    const first = Math.max(0, pointsUpTo(camera - 120) - 1);
    const whole = Math.floor(head);
    let d = '';
    for (let i = first; i <= whole; i++) d += `${i === first ? 'M' : 'L'}${(line.x[i] - camera).toFixed(1)} ${line.y[i].toFixed(1)}`;
    if (whole < line.n - 1 && whole >= first) {
        const k = head - whole;
        d += `L${(line.x[whole] + (line.x[whole + 1] - line.x[whole]) * k - camera).toFixed(1)} ${(line.y[whole] + (line.y[whole + 1] - line.y[whole]) * k).toFixed(1)}`;
    }
    path.setAttribute('d', head > 0.5 ? d : '');
    path.parentNode.style.transform = `translate3d(${camera.toFixed(2)}px,0,0)`;
    el('strip').style.transform = `translate3d(${(-camera).toFixed(2)}px,0,0)`;

    // Each stop knows how far off it is (for its drift and its arrival), and the nav
    // follows the nearest one
    let section = stops[0].section;
    for (const stop of stops) {
        const off = (stop.left - camera) / w;
        stop.el.style.setProperty('--off', clamp(off, -1.5, 1.5).toFixed(3));
        stop.el.classList.toggle('here', Math.abs(off) < 0.62);
        if (off < 0.5) section = stop.section;
    }
    if (section !== currentSection) {
        currentSection = section;
        document.querySelectorAll('.nav-button[data-section]').forEach(button => {
            button.classList.toggle('active', button.dataset.section === currentSection);
        });
    }
    requestAnimationFrame(frame);
}

function navigateToSection(sectionId, instant) {
    const stop = stops.find(s => s.section === sectionId);
    if (!stop) return;
    window.scrollTo({ top: Math.ceil(scrollFor(stop.left)), behavior: instant || reducedMotion ? 'auto' : 'smooth' });
    document.querySelector('.hamburger')?.classList.remove('active');
    document.querySelector('.nav-content')?.classList.remove('open');
    document.body.classList.remove('menu-open');
}

function toggleLanguage() {
    language = language === 'en' ? 'fr' : 'en';
    document.documentElement.lang = language;
    render();
    updateNavigation();
}

function setupEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-content');
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        const button = e.target.closest('.nav-button[data-section]');
        if (button) navigateToSection(button.dataset.section);
        if (e.target.closest('.language-toggle')) toggleLanguage();
    });

    document.addEventListener('mouseenter', (e) => {
        const navText = e.target.closest?.('.nav-button .nav-text');
        if (navText) scrambleNavText(navText);
    }, true);

    // Sideways gestures travel too: a sideways wheel or trackpad swipe, a sideways drag
    // of the finger, and the arrow keys
    window.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) window.scrollBy(0, e.deltaX);
    }, { passive: true });
    let touch = null;
    window.addEventListener('touchstart', (e) => { touch = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, { passive: true });
    window.addEventListener('touchmove', (e) => {
        if (!touch) return;
        const dx = e.touches[0].clientX - touch.x;
        const dy = e.touches[0].clientY - touch.y;
        if (Math.abs(dx) > Math.abs(dy)) window.scrollBy(0, -dx * 1.6);
        touch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') window.scrollBy({ top: screen.h * 0.5, behavior: 'smooth' });
        if (e.key === 'ArrowLeft') window.scrollBy({ top: -screen.h * 0.5, behavior: 'smooth' });
    });

    let resizing = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizing);
        resizing = setTimeout(() => { if (el('stage').clientWidth !== screen.w || Math.abs(el('stage').clientHeight - screen.h) > 120) layout(); }, 120);
    });
}

function init() {
    if (!reducedMotion) document.documentElement.classList.add('motion');
    setupEventListeners();
    render();
    updateNavigation();

    // A specific section can be requested via URL param (e.g. ?section=portfolio)
    const requested = new URLSearchParams(window.location.search).get('section');
    if (requested && sections.some(s => s.id === requested)) navigateToSection(requested, true);

    // Opening part-way along: no landing sequence
    if (window.scrollY > 8) document.documentElement.classList.add('skip-landing');
    requestAnimationFrame(() => document.documentElement.classList.add('ready'));
    window.addEventListener('load', layout);
    requestAnimationFrame(frame);
}

// For checking the rule: the bow (px) of the straightest stretch of the line
window.straightest = () => line.bow;

document.addEventListener('DOMContentLoaded', init);
