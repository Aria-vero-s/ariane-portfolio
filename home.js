// The home page: a row of full-screen scenes (bio, one per project, contact) that pile
// up like cards as the reader scrolls, with one bold line drawn across each of them.

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
// The scenes
// ---------------------------------------------------------------------------

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sectionName = (id) => sections.find(section => section.id === id).name[language];
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));

const projectLink = (item) => {
    if (item.slug === 'book-club') return language === 'fr' ? 'projects/fr/book-club.html' : 'projects/book-club.html';
    if (item.slug === 'bigwatts' && language === 'fr') return 'projects/fr/bigwatts.html';
    return `projects/${item.slug}.html`;
};

const lineSVG = '<svg class="line" aria-hidden="true"><path></path></svg>';

// Each scene is a tall block with a full-screen "pin" that stays put while the reader
// scrolls through it. --dwell is how long (in screen heights / 100) it holds while its
// line is drawn, before the next scene slides up over it.
function sceneHTML({ id, section, kind, dwell, body, flip }) {
    return `
        <section class="scene scene-${kind}${flip ? ' flip' : ''}" ${id ? `id="${id}"` : ''} data-section="${section}" data-kind="${kind}" style="--dwell: ${dwell}">
            <div class="pin">${body}${lineSVG}</div>
        </section>
    `;
}

function bioHTML() {
    const words = content[language].bio.statement.split(' ')
        .map((word, i) => `<span class="mask"><span style="--i: ${i}">${word}</span></span>`).join(' ');
    return sceneHTML({
        id: 'about', section: 'about', kind: 'bio', dwell: 110,
        body: `<h1 class="bio-statement">${words}</h1>`,
    });
}

function projectHTML(item, i, all) {
    const count = n => String(n).padStart(2, '0');
    return sceneHTML({
        id: i === 0 ? 'portfolio' : '', section: 'portfolio', kind: 'project', dwell: 90, flip: i % 2 === 1,
        body: `
            <a class="poster" href="${projectLink(item)}">
                <div class="poster-media rv">
                    ${item.image ? `<img src="${item.image}" alt="">` : `<div class="poster-icon"><i data-lucide="${item.icon}"></i></div>`}
                </div>
                <div class="poster-text">
                    <p class="poster-count rv">${count(i + 1)} / ${count(all.length)}</p>
                    <h2 class="poster-title rv">${item.title}</h2>
                    <p class="poster-category rv">${item.category}</p>
                    <p class="poster-description rv">${item.description}</p>
                    <span class="poster-cta rv">${language === 'fr' ? 'Voir le projet' : 'View project'} <span class="poster-arrow">→</span></span>
                </div>
            </a>
        `,
    });
}

function contactHTML() {
    const wave = '<div class="wave"><svg viewBox="0 0 2400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60V30C150 8 300 8 450 30S750 52 900 30S1200 8 1350 30S1650 52 1800 30S2100 8 2250 30S2400 40 2400 30V60Z"/></svg></div>';
    return sceneHTML({
        id: 'contact', section: 'contact', kind: 'contact', dwell: 80,
        body: `
            ${wave}
            <div class="contact">
                <p class="contact-label rv">${sectionName('contact')}</p>
                <a class="contact-email rv" href="mailto:${EMAIL}">${EMAIL}</a>
                <ul class="contact-links rv">
                    ${content[language].contact.links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener">${link.name}</a></li>`).join('')}
                </ul>
            </div>
        `,
    });
}

// ---------------------------------------------------------------------------
// The line
// ---------------------------------------------------------------------------
//
// One bold, even stroke in big sweeps, with a loop here and there. Each scene has its
// stretch of it, which leaves the bottom of the screen where the next one comes in at
// the top. Scrolling draws it; nothing is drawn at the top of the page.
//
// RULE: never a straight line. Each stretch is measured, and wherever it would run
// straight it is made to sway until it does not (see neverStraight).
//
// A route is a list of points the line passes through, as fractions of the screen
// ([across, down]), or loops: { c: [across, down], r (× the screen's short side),
// from (angle it starts at), turn (1 clockwise, -1 anticlockwise) }.

const TAU = Math.PI * 2;
const ROUTES = {
    // Screens wider than they are tall: over the picture, then away under the words
    wide: {
        bio: [[0.72, -0.1], [0.94, 0.2], { c: [0.79, 0.47], r: 0.13, from: 0, turn: 1 }, [0.57, 0.85], [0.3, 0.9], [0.18, 1.1]],
        project: [[0.18, -0.1], [0.06, 0.2], [0.17, 0.5], { c: [0.33, 0.47], r: 0.12, from: TAU / 4, turn: -1 }, [0.5, 0.74], [0.68, 0.87], [0.87, 0.92], [0.82, 1.1]],
        contact: [[0.82, -0.1], [0.93, 0.22], [0.8, 0.52], [0.6, 0.7], { c: [0.45, 0.66], r: 0.07, from: TAU / 4, turn: 1 }, [0.25, 0.71], [0.1, 0.78]],
    },
    // Phones, held upright: the text takes the width, so the line keeps to the open parts
    tall: {
        bio: [[1.1, 0.7], [0.78, 0.76], { c: [0.52, 0.8], r: 0.1, from: -TAU / 4, turn: -1 }, [0.24, 0.87], [0.18, 1.1]],
        project: [[0.18, -0.1], [0.07, 0.12], [0.45, 0.27], [0.85, 0.2], [0.965, 0.4], [0.88, 0.56], [0.95, 0.7], [0.62, 0.8], { c: [0.4, 0.87], r: 0.1, from: -TAU / 4, turn: -1, quarters: 6 }, [0.7, 0.95], [0.82, 1.1]],
        contact: [[0.82, -0.1], [0.94, 0.12], [0.96, 0.4], [0.8, 0.68], { c: [0.55, 0.7], r: 0.08, from: TAU / 4, turn: 1 }, [0.25, 0.76], [0.1, 0.82]],
    },
};

const STEP = 5;         // spacing of the points along the line, px
const STRETCH = 300;    // the rule: over any stretch this long…
const BOW = 5;          // …the line must bow this far from the straight path between its ends

// The route's points in px (mirrored left to right when `flip`)
function waypoints(route, w, h, flip) {
    const out = [];
    const x = v => (flip ? 1 - v : v) * w;
    for (const item of route) {
        if (Array.isArray(item)) { out.push([x(item[0]), item[1] * h]); continue; }
        const r = item.r * Math.min(w, h);
        for (let k = 0; k <= (item.quarters || 4) * 2; k++) {
            const a = item.from + item.turn * k * TAU / 8;
            out.push([x(item.c[0]) + (flip ? -1 : 1) * r * Math.cos(a), item.c[1] * h + r * Math.sin(a)]);
        }
    }
    return out;
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
// from side to side, more and more until no stretch is straight
function neverStraight(base) {
    const n = base.length;
    const sway = base.map((p, i) => {
        const a = base[Math.max(0, i - 3)];
        const b = base[Math.min(n - 1, i + 3)];
        const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        const s = Math.sin((i * STEP / 330) * TAU);
        return [(-(b[1] - a[1]) / d) * s, ((b[0] - a[0]) / d) * s];
    });
    const amount = new Float32Array(n);
    let pts = base;
    for (let attempt = 0; attempt < 12; attempt++) {
        const bow = bows(pts);
        if (bow.every(b => b >= BOW + 1)) break;
        const need = Array.from(bow, b => clamp((BOW * 2.4 - b) / (BOW * 1.4)));
        pts = base.map((p, i) => {
            let sum = 0;
            let count = 0;
            for (let k = Math.max(0, i - 30); k <= Math.min(n - 1, i + 30); k += 5) { sum += need[k]; count++; }
            amount[i] += 6 * sum / count;
            return [p[0] + sway[i][0] * amount[i], p[1] + sway[i][1] * amount[i]];
        });
    }
    return pts;
}

// ---------------------------------------------------------------------------
// Layout and scrolling
// ---------------------------------------------------------------------------

let scenes = [];    // { el, pin, path, kind, top, dwell, length, shown, bow }
let screen = { w: 0, h: 0 };

function render() {
    const items = portfolioItems[language];
    document.getElementById('scenes').innerHTML = bioHTML() + items.map(projectHTML).join('') + contactHTML();
    window.lucide?.createIcons();
    scenes = [...document.querySelectorAll('.scene')].map(el => ({
        el, pin: el.querySelector('.pin'), path: el.querySelector('.line path'),
        kind: el.dataset.kind, flip: el.classList.contains('flip'), shown: -1,
    }));
    layout();
}

// Where each scene sits, and its stretch of the line
function layout() {
    if (!scenes.length) return;
    const w = scenes[0].pin.clientWidth;
    const h = scenes[0].pin.clientHeight;
    screen = { w, h };
    const routes = w > h * 0.9 ? ROUTES.wide : ROUTES.tall;
    const weight = clamp(w * 0.011, 8, 18);
    scenes.forEach((scene, i) => {
        const last = i === scenes.length - 1;
        scene.top = scene.el.offsetTop;
        scene.dwell = scene.el.offsetHeight - h * (last ? 1 : 2);
        const pts = neverStraight(curve(waypoints(routes[scene.kind], w, h, scene.flip)));
        scene.bow = bows(pts).reduce((least, b) => Math.min(least, b), Infinity);
        scene.length = (pts.length - 1) * STEP;
        scene.path.setAttribute('d', pts.map((p, k) => `${k ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(''));
        scene.path.style.strokeWidth = weight;
        scene.path.style.strokeDasharray = `${scene.length + 40} ${scene.length + 40}`;
        scene.shown = -1;
    });
}

// Every frame: how much of each line is drawn, which scenes are being covered, and
// which section the reader is in
function frame() {
    const y = window.scrollY;
    let section = scenes[0]?.el.dataset.section;
    scenes.forEach((scene, i) => {
        const last = i === scenes.length - 1;
        const drawn = reducedMotion ? 1 : clamp((y - scene.top) / scene.dwell);
        const shown = scene.shown < 0 || Math.abs(drawn - scene.shown) < 0.0005 ? drawn : scene.shown + (drawn - scene.shown) * 0.16;
        if (shown !== scene.shown) {
            scene.shown = shown;
            scene.path.style.strokeDashoffset = (scene.length + 40) * (1 - shown) + 40 * shown;
            scene.path.style.visibility = shown > 0.0005 ? 'visible' : 'hidden';
        }
        const covered = last ? 0 : clamp((y - scene.top - scene.dwell) / screen.h);
        scene.pin.style.setProperty('--covered', covered.toFixed(3));
        scene.pin.style.visibility = covered >= 1 ? 'hidden' : '';
        scene.el.classList.toggle('in', y > scene.top - screen.h * 0.6);
        if (y > scene.top - screen.h * 0.5) section = scene.el.dataset.section;
    });
    if (section !== currentSection) {
        currentSection = section;
        document.querySelectorAll('.nav-button[data-section]').forEach(button => {
            button.classList.toggle('active', button.dataset.section === currentSection);
        });
    }
    requestAnimationFrame(frame);
}

function navigateToSection(sectionId, instant) {
    const first = scenes.find(scene => scene.el.dataset.section === sectionId);
    if (!first) return;
    const top = first === scenes[0] ? 0 : first.top + 1;
    window.scrollTo({ top, behavior: instant || reducedMotion ? 'auto' : 'smooth' });
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

    let resizing = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizing);
        resizing = setTimeout(() => { if (scenes[0]?.pin.clientWidth !== screen.w) layout(); else scenes.forEach(s => { s.top = s.el.offsetTop; }); }, 120);
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

    // Opening part-way down the page: no landing sequence
    if (window.scrollY > 8) document.documentElement.classList.add('skip-landing');
    requestAnimationFrame(() => document.documentElement.classList.add('ready'));
    window.addEventListener('load', layout);
    requestAnimationFrame(frame);
}

// For checking the rule: the bow (px) of the straightest stretch of the line
window.straightest = () => Math.min(...scenes.map(scene => scene.bow));

document.addEventListener('DOMContentLoaded', init);
