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

// ---------------------------------------------------------------------------
// The page: bio, portfolio and contact in one scroll, led by the line (line.js)
// ---------------------------------------------------------------------------

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderPage() {
    document.getElementById('content').innerHTML =
        createAboutHTML() + createPortfolioHTML() + createContactHTML();
    window.lucide?.createIcons();
}

// Scrolling to a section: the page glides there and the line runs ahead of it
let glide = null;

function stopGlide() {
    if (glide) cancelAnimationFrame(glide);
    glide = null;
}

function scrollToY(y, instant) {
    stopGlide();
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const to = Math.min(Math.max(0, y), Math.max(0, max));
    const from = window.scrollY;
    const distance = to - from;

    if (instant || reducedMotion || Math.abs(distance) < 2) {
        window.scrollTo(0, to);
        return;
    }

    const duration = Math.min(2400, Math.max(1000, 700 + Math.abs(distance) * 0.3));
    const t0 = performance.now();
    const step = (now) => {
        const u = Math.min(1, (now - t0) / duration);
        const eased = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
        window.scrollTo(0, from + distance * eased);
        glide = u < 1 ? requestAnimationFrame(step) : null;
    };
    glide = requestAnimationFrame(step);
}

// A section is in place when its label sits just below the nav (the bio is the top of
// the page). The line decides how far the page is down for each scroll position, so it
// is asked which scroll position that is.
function sectionScrollY(sectionId) {
    const label = document.querySelector(`#${sectionId} .eyebrow`);
    if (!label || sectionId === sections[0].id) return 0;
    // The last section is the end of the scroll, where the water has risen over it
    if (sectionId === sections[sections.length - 1].id) return document.documentElement.scrollHeight;
    const page = document.getElementById('page').getBoundingClientRect();
    const navBottom = document.querySelector('.nav-container').getBoundingClientRect().bottom;
    return window.GuideLine.scrollFor(label.getBoundingClientRect().top - page.top - navBottom - 48);
}

// Navigation
function navigateToSection(sectionId, instant) {
    document.querySelector('.hamburger')?.classList.remove('active');
    document.querySelector('.nav-content')?.classList.remove('open');
    document.body.classList.remove('menu-open');

    scrollToY(sectionScrollY(sectionId), instant);
}

// The nav follows the page: the section under the middle of the screen is the active one
function trackSection(camera) {
    const line = camera + window.innerHeight * 0.5;
    const atBottom = camera >= window.GuideLine.lowest() - 4;

    let active = sections[0].id;
    sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= line) active = section.id;
    });
    if (atBottom) active = sections[sections.length - 1].id;

    if (active === currentSection) return;
    currentSection = active;
    document.querySelectorAll('.nav-button[data-section]').forEach(button => {
        button.classList.toggle('active', button.dataset.section === currentSection);
    });
}

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

// Create HTML for each section. Elements marked "r" are revealed by the line
// as it passes them.
const sectionName = (id) => sections.find(section => section.id === id).name[language];

// Bio: a few sentences, there as soon as the page opens. Each word rises into place in turn.
function createAboutHTML() {
    const t = content[language].bio;

    const words = t.statement.split(' ')
        .map((word, i) => `<span class="mask"><span style="--i: ${i}">${word}</span></span>`)
        .join(' ');

    return `
        <section class="section about-section" id="about">
            <div class="container">
                <div class="bio">
                    <h1 class="bio-statement words r" data-cue="start">${words}</h1>
                </div>
            </div>
        </section>
    `;
}

// Portfolio: one project at a time. Each is a card that stays put while the next one
// slides up over it, so the cards end up one behind the other (see stackCards).
function createPortfolioHTML() {
    const items = portfolioItems[language];

    const getProjectLink = (item) => {
        if (item.slug === 'book-club') {
            return language === 'fr' ? 'projects/fr/book-club.html' : 'projects/book-club.html';
        }
        if (item.slug === 'bigwatts' && language === 'fr') {
            return 'projects/fr/bigwatts.html';
        }
        return `projects/${item.slug}.html`;
    };

    const workHTML = (item, i) => `
        <a href="${getProjectLink(item)}" class="work" style="--n: ${i}">
            <div class="work-card">
                <div class="work-image">
                    ${item.image
                        ? `<img src="${item.image}" alt="">`
                        : `<i data-lucide="${item.icon}"></i>`}
                </div>
                <div class="work-caption">
                    <h3 class="work-title">${item.title}</h3>
                    <p class="work-category">${item.category}</p>
                </div>
            </div>
        </a>
    `;

    return `
        <section class="section portfolio-section" id="portfolio">
            <div class="container">
                <p class="eyebrow r">${sectionName('portfolio')}</p>
                <div class="works">
                    ${items.map(workHTML).join('')}
                </div>
            </div>
        </section>
    `;
}

// The cards pile up: each stops at its place near the top of the screen and stays there
// while the page moves on, until the last one has arrived. A card that is being covered
// steps back: it shrinks and dims a little as the next one slides over it.
function stackCards(camera) {
    const works = document.querySelector('.works');
    if (!works) return;
    const end = works.offsetTop + works.offsetHeight;

    const cards = [...works.querySelectorAll('.work')].map(el => {
        const stop = parseFloat(getComputedStyle(el).scrollMarginTop);
        const held = Math.min(Math.max(0, stop - (el.offsetTop - camera)), end - el.offsetTop - el.offsetHeight);
        return { el, held, top: el.offsetTop + held, height: el.offsetHeight };
    });

    cards.forEach((card, i) => {
        const next = cards[i + 1];
        const covered = next && !reducedMotion
            ? Math.min(1, Math.max(0, 1 - (next.top - card.top) / card.height))
            : 0;
        card.el.style.transform = `translate3d(0, ${card.held.toFixed(1)}px, 0)`;
        const inner = card.el.firstElementChild;
        inner.style.transform = `scale(${1 - 0.05 * covered})`;
        inner.style.filter = covered ? `brightness(${1 - 0.08 * covered})` : '';
    });
}

// Contact: the address, and where else to find me. It is under water: line.js shows
// each piece once the water has risen over it.
function createContactHTML() {
    const t = content[language].contact;

    return `
        <section class="section contact-section" id="contact">
            <div class="container">
                <p class="eyebrow">${sectionName('contact')}</p>
                <a href="mailto:${EMAIL}" class="contact-email">${EMAIL}</a>
                <ul class="contact-links">
                    ${t.links.map(link => `
                        <li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a></li>
                    `).join('')}
                </ul>
            </div>
        </section>
    `;
}

// Toggle language
function toggleLanguage() {
    language = language === 'en' ? 'fr' : 'en';
    document.documentElement.lang = language;

    renderPage();
    updateNavigation();
    window.GuideLine.rebuild();
    stackCards(window.GuideLine.camera());
}

// Event listeners
function setupEventListeners() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-content");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("open");
            document.body.classList.toggle("menu-open");
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-button[data-section]')) {
            const section = e.target.closest('.nav-button[data-section]').dataset.section;
            navigateToSection(section);
        }

        if (e.target.closest('.language-toggle')) {
            toggleLanguage();
        }
    });

    document.addEventListener('mouseenter', (e) => {
        const navText = e.target.closest?.('.nav-button .nav-text');

        if (navText) {
            scrambleNavText(navText);
        }
    }, true);

    // The reader takes over from a glide as soon as they scroll themselves
    ['wheel', 'touchstart', 'keydown'].forEach(type => {
        window.addEventListener(type, stopGlide, { passive: true });
    });

}

// Initialize application
function init() {
    setupEventListeners();

    renderPage();
    updateNavigation();

    // The line moves the page; the nav and the cards follow it
    window.GuideLine.onMove = (camera) => {
        trackSection(camera);
        stackCards(camera);
    };
    window.GuideLine.init(document.getElementById('page'));

    // A specific section can be requested via URL param (e.g. ?section=portfolio)
    const requestedSection = new URLSearchParams(window.location.search).get('section');
    if (requestedSection && sections.some(s => s.id === requestedSection)) {
        navigateToSection(requestedSection, true);
    }

    // Opening part-way down the page: no landing sequence
    if (window.scrollY > 8) document.documentElement.classList.add('skip-landing');
    window.GuideLine.settle();
    trackSection(window.GuideLine.camera());
    stackCards(window.GuideLine.camera());
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
