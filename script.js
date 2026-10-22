// Application State
let currentSection = 'hero';
let isTravelling = false;
let language = 'en';

// Content Data
const sections = [
    { id: 'hero', name: { en: 'Home', fr: 'Accueil' }, icon: 'home' },
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
        hero: {
            subtitle: 'UI/UX Designer • Web Developer • Creative Thinker',
            tagline: 'I help freelancers and small businesses grow online with simple, beautiful websites. From small static websites to full builds on Shopify, Wix, WordPress, or Webflow—I handle it all, start to finish, within your budget.',
            learnMore: 'Learn More',
            viewPortfolio: 'View Portfolio'
        },
        about: {
            title: 'Ariane Saulnier',
            profile: 'Currently studying at École 42 in Paris and completing an internship at Air France in IT, I design and contribute to complex digital interfaces in enterprise environments. I have experience in mobile-first design, prototyping, and iterative product workflows within fast-paced teams. Originally from Canada, I am fully bilingual in French and English, and I am developing a career in UI/UX design focused on improving both user experience and product outcomes.',
            skillsTitle: 'Skills',
            skillCategories: [
                {
                    name: 'UX/UI Design',
                    items: 'Wireframes, User Flow, mockups, user stories, prototyping, mobile design, user testing, design systems, interfaces',
                    practice: 'Applied in: Air France, BeautifulCalf Productions, personal portfolio, 42 / Code Institute projects',
                },
                {
                    name: 'Tools & Technologies',
                    items: 'Figma, Wordpress, Git, GitHub, Jira, Confluence, HTML/CSS, JavaScript, React, Python, C and C++',
                    practice: 'Applied in: client websites, academic projects, visual and multimedia creation',
                },
                {
                    name: 'Soft Skills & Methods',
                    items: 'Needs analysis, user listening, teamwork, continuous improvement, agile methodology',
                    practice: 'Applied in: Air France, Service Canada, music teaching, web projects',
                }
            ],
            educationTitle: 'Education',
            educationItems: [
                { school: 'École 42', location: 'Paris, France', degree: 'Certificat d\'Architecte en Technologie Numérique', dates: '05/2024 – Present' },
                { school: 'Code Institute London', location: 'United Kingdom', degree: 'Diploma in Software Development (E-commerce Applications)', dates: '02/2022 – 02/2023' },
                { school: 'Université de Moncton', location: 'Canada', degree: "Bachelor's Degree in Music Education", dates: '09/2017 – 05/2020' },
                { school: "Université d'Ottawa", location: 'Canada', degree: "Bachelor's Degree in Music Performance", dates: '09/2013 – 05/2017' }
            ],
            experienceTitle: 'Professional Experience',
            experienceItems: [
                {
                    title: 'IT Intern – Flight Ops',
                    company: 'Air France, CDG Île-de-France',
                    description: 'Collaboration and participation in internal tool migration projects, interface mockup design, and observation of business needs within IT Flight Ops.',
                    location: 'France',
                    dates: '2026 – Present'
                },
                {
                    title: 'Web Developer & Designer',
                    company: 'BeautifulCalf Productions (Canadian company)',
                    description: 'Design and development of websites using Webflow, Wix, WordPress, and Shopify for various clients.',
                    location: 'Remote',
                    dates: '2024 – Present'
                },
                {
                    title: 'Teacher – Public schools & Music education',
                    company: 'Teaching Artist – Sistema NB, schools in Canada and the United Kingdom',
                    description: 'Experience in pedagogy, communication, and group management in multicultural environments.',
                    location: 'Canada & United Kingdom',
                    dates: '2017 – 2023'
                },
                {
                    title: 'Citizen Services Officer',
                    company: 'Service Canada, Government of Canada',
                    description: 'Handling nationwide calls, problem resolution, and secure database data entry.',
                    location: 'Canada',
                    dates: '2018 – 2019'
                }
            ],
            languagesTitle: 'Languages & Interests',
            languagesSubtitle: 'Languages',
            interestsSubtitle: 'Interests',
            languages: ['Bilingual French–English', 'Beginner Italian (A2)'],
            interests: ['Adobe Creative Suite', 'Music (guitar, clarinet, piano)', 'DaVinci Resolve (youtube.com/@ariane.saulnier)', 'Graphic Design (behance.net/arianesaulnier)', 'Chess (3 years)']
        },
        portfolio: {
            title: 'Portfolio',
            intro: 'UX Design thinking with front-end development skills — a hybrid approach to building digital products.',
            featuredTitle: 'Featured Projects',
            otherTitle: 'Other Technical Projects',
            viewProject: 'View Project',
            viewCaseStudy: 'View Case Study',
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Whether it\'s a website, a tool, or a small project, I\'d love to help. I enjoy turning ideas into reality and solving problems with design, code, and creativity, both for individuals and for teams.',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            formTitle: 'Send a Message',
            nameLabel: 'Name',
            emailLabel: 'Email',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            sendButton: 'Send Message'
        }
    },
    fr: {
        hero: {
            subtitle: 'UI/UX Designer • Développeuse Web • Conceptrice Créative',
            tagline: 'J\'aide les freelances et les petites entreprises à se développer en ligne grâce à des sites web simples et élégants. Qu\'il s\'agisse de petits sites statiques ou de créations complètes sur Shopify, Wix, WordPress ou Webflow—je m\'occupe de tout, de A à Z, dans le respect de votre budget.',
            learnMore: 'En Savoir Plus',
            viewPortfolio: 'Voir Portfolio'
        },
        about: {
            title: 'Ariane Saulnier',
            profile: 'Étudiante à l\'École 42 (Maîtrise en Web & IA). Actuellement stagiaire au sein des équipes IT Flight Ops d\'Air France à Paris, où je travaille sur des interfaces métier et en analyse d\'architecture. Mon approche combine UX design, compréhension des besoins utilisateurs et compréhension technique. Je souhaite rejoindre une équipe UX afin de contribuer à des projets structurés autour de la recherche utilisateur, de la conception itérative et de la création d\'expériences numériques accessibles et utiles.',
            skillsTitle: 'Compétences',
            skillCategories: [
                {
                    name: 'UX/UI',
                    items: 'Wireframes, User Flow, mockups, user stories, prototyping, mobile design, user testing, design systems, interfaces',
                    practice: 'Mise en pratique : Air France, projets 42, BeautifulCalf Productions, portfolio, freelance',
                },
                {
                    name: 'Outils & Technologies',
                    items: 'Figma, Wordpress, Git, GitHub, Jira, Confluence, HTML/CSS, JavaScript, React, Python, C et C++',
                    practice: 'Mise en pratique : sites web clients, projets académiques, création visuelle et multimédia',
                },
                {
                    name: 'Soft Skills & Méthode',
                    items: 'Organisation, Communication, Travail en Équipe, Amélioration Continue et Méthode Agile',
                    practice: 'Mise en pratique : Air France, Service Canada, enseignement musical, projets web',
                }
            ],
            educationTitle: 'Formation',
            educationItems: [
                { school: 'École 42', location: 'Paris, France', degree: 'Certificat d\'Architecte en Technologie Numérique', dates: '05/2024 – Présent' },
                { school: 'Code Institute London', location: 'Royaume-Uni', degree: 'Diplôme en Développement logiciel (E-commerce Applications)', dates: '02/2022 – 02/2023' },
                { school: 'Université de Moncton', location: 'Canada', degree: 'Baccalauréat en Éducation musicale', dates: '09/2017 – 05/2020' },
                { school: "Université d'Ottawa", location: 'Canada', degree: 'Baccalauréat en Interprétation musicale', dates: '09/2013 – 05/2017' }
            ],
            experienceTitle: 'Expérience professionnelle',
            experienceItems: [
                {
                    title: 'Stagiaire IT Flight Ops',
                    company: 'Air France, CDG Île-de-France',
                    description: 'Collaboration et participation à des projets de migration d\'outils internes, conception de maquettes d\'interfaces et observation des besoins métiers au sein de IT Flight Ops.',
                    location: 'France',
                    dates: '2026 – Présent'
                },
                {
                    title: 'Web Developer & Designer',
                    company: 'BeautifulCalf Productions, compagnie canadienne',
                    description: 'Conception de sites web sur Webflow, Wix, Wordpress et Shopify pour différents besoins clients.',
                    location: 'Télétravail',
                    dates: '2024 – Présent'
                },
                {
                    title: 'Enseignante – école publique & enseignement musical',
                    company: '\'Teaching Artist\' Sistema NB, écoles au Canada et au Royaume-Uni',
                    description: 'Expérience en pédagogie, communication et gestion de groupe dans des contextes multiculturels.',
                    location: 'Canada & Royaume-Uni',
                    dates: '2017 – 2023'
                },
                {
                    title: 'Agent de services aux citoyens',
                    company: 'Service Canada, Gouvernement du Canada',
                    description: 'Gestion d\'appels à l\'échelle nationale, résolution de problèmes et saisie de données en bases sécurisées.',
                    location: 'Canada',
                    dates: '2018 – 2019'
                }
            ],
            languagesTitle: 'Langues et intérêts',
            languagesSubtitle: 'Langues',
            interestsSubtitle: 'Intérêts',
            languages: ['Bilingue français-anglais', 'Italien débutant (A2)'],
            interests: ['Adobe Creative Suite', 'Musique (guitare, clarinette, piano)', 'DaVinci Resolve (youtube.com/@ariane.saulnier)', 'Graphisme (behance.net/arianesaulnier)', 'Échecs (depuis 3 ans)']
        },
        portfolio: {
            title: 'Portfolio',
            intro: 'Pensée UX Design avec des compétences en développement front-end — une approche hybride pour construire des produits numériques.',
            featuredTitle: 'Projets Sélectionnés',
            otherTitle: 'Autres Projets Techniques',
            viewProject: 'Voir le Projet',
            viewCaseStudy: 'Voir l\'Étude de Cas',
        },
        contact: {
            title: 'Contactez-Moi',
            subtitle: 'Que ce soit un site web, un outil ou un petit projet, je serais ravie de vous aider. J\'aime transformer les idées en réalité et résoudre des problèmes grâce au design, au code et à la créativité, pour les particuliers comme pour les équipes.',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            formTitle: 'Envoyer un Message',
            nameLabel: 'Nom',
            emailLabel: 'Email',
            messageLabel: 'Message',
            messagePlaceholder: 'Parlez-moi de votre projet...',
            sendButton: 'Envoyer le Message'
        }
    }
};

// Circuit board background – one persistent SVG behind every section
const SVG_NS = 'http://www.w3.org/2000/svg';
const TRAVEL_DURATION = 1400;   // ms for the camera to glide to the next board
const CAMERA_PULLBACK = 0.08;   // how far the camera zooms out mid-flight
let circuitSize = { w: 0, h: 0 };

// Circuit Pattern Animation
// Builds the circuit paths using real pixel coordinates so the pattern
// stretches to fill any viewport aspect-ratio without cropping or
// distorting stroke widths.

function buildCircuitData(w, h) {
    // Bump size in pixels – the small zigzag offsets on the traces
    const b = Math.min(w, h) * 0.03; // ~3 % of the smallest dimension

    // Percentage-based anchor positions (same visual layout as before)
    const x = {
        outer1: w * 0.05,
        inner1: w * 0.17,
        mid1:   w * 0.30,
        mid2:   w * 0.70,
        inner2: w * 0.83,
        outer2: w * 0.95,
        off:    w * 0.05,   // overflow beyond edges
    };
    const y = {
        outer1: h * 0.055,
        inner1: h * 0.19,
        mid1:   h * 0.333,
        mid2:   h * 0.667,
        inner2: h * 0.81,
        outer2: h * 0.944,
        off:    h * 0.055,
    };

    // Helper – round to 1 decimal
    const r = v => Math.round(v * 10) / 10;

    const circuitTraces = [
        // ── Top frame ───────────────────────────────────────────
        {
            path: `M${r(-x.off)},${r(y.outer1)} L${r(x.inner1)},${r(y.outer1)} L${r(x.inner1)},${r(y.outer1+b)} L${r(x.mid1)},${r(y.outer1+b)} L${r(x.mid1)},${r(y.outer1)} L${r(x.mid2)},${r(y.outer1)} L${r(x.mid2)},${r(y.outer1+b)} L${r(x.inner2)},${r(y.outer1+b)} L${r(x.inner2)},${r(y.outer1)} L${r(w+x.off)},${r(y.outer1)}`,
            delay: 0, duration: 4.0, strokeWidth: 2
        },
        {
            path: `M${r(-x.off)},${r(y.inner1)} L${r(x.inner1-b)},${r(y.inner1)} L${r(x.inner1-b)},${r(y.inner1-b)} L${r(x.inner1+b)},${r(y.inner1-b)} L${r(x.inner1+b)},${r(y.inner1)} L${r(x.inner2-b)},${r(y.inner1)} L${r(x.inner2-b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1)} L${r(w+x.off)},${r(y.inner1)}`,
            delay: 0.5, duration: 3.8, strokeWidth: 1.8
        },

        // ── Bottom frame ────────────────────────────────────────
        {
            path: `M${r(-x.off)},${r(y.outer2)} L${r(x.inner1+b)},${r(y.outer2)} L${r(x.inner1+b)},${r(y.outer2-b)} L${r(x.mid1+b)},${r(y.outer2-b)} L${r(x.mid1+b)},${r(y.outer2)} L${r(x.mid2-b)},${r(y.outer2)} L${r(x.mid2-b)},${r(y.outer2-b)} L${r(x.inner2-b)},${r(y.outer2-b)} L${r(x.inner2-b)},${r(y.outer2)} L${r(w+x.off)},${r(y.outer2)}`,
            delay: 1.2, duration: 4.2, strokeWidth: 2
        },
        {
            path: `M${r(-x.off)},${r(y.inner2)} L${r(x.inner1)},${r(y.inner2)} L${r(x.inner1)},${r(y.inner2+b)} L${r(x.mid1)},${r(y.inner2+b)} L${r(x.mid1)},${r(y.inner2)} L${r(x.mid2)},${r(y.inner2)} L${r(x.mid2)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2)} L${r(w+x.off)},${r(y.inner2)}`,
            delay: 1.8, duration: 3.6, strokeWidth: 1.8
        },

        // ── Left frame ──────────────────────────────────────────
        {
            path: `M${r(x.outer1)},${r(-y.off)} L${r(x.outer1)},${r(y.inner1)} L${r(x.outer1+b)},${r(y.inner1)} L${r(x.outer1+b)},${r(y.mid1)} L${r(x.outer1)},${r(y.mid1)} L${r(x.outer1)},${r(y.mid2)} L${r(x.outer1+b)},${r(y.mid2)} L${r(x.outer1+b)},${r(y.inner2)} L${r(x.outer1)},${r(y.inner2)} L${r(x.outer1)},${r(h+y.off)}`,
            delay: 2.0, duration: 3.5, strokeWidth: 1.9
        },
        {
            path: `M${r(x.inner1)},${r(-y.off)} L${r(x.inner1)},${r(y.inner1-b)} L${r(x.inner1-b)},${r(y.inner1-b)} L${r(x.inner1-b)},${r(y.inner1+b)} L${r(x.inner1)},${r(y.inner1+b)} L${r(x.inner1)},${r(y.inner2-b)} L${r(x.inner1-b)},${r(y.inner2-b)} L${r(x.inner1-b)},${r(y.inner2+b)} L${r(x.inner1)},${r(y.inner2+b)} L${r(x.inner1)},${r(h+y.off)}`,
            delay: 2.5, duration: 3.8, strokeWidth: 1.6
        },

        // ── Right frame ─────────────────────────────────────────
        {
            path: `M${r(x.outer2)},${r(-y.off)} L${r(x.outer2)},${r(y.inner1)} L${r(x.outer2-b)},${r(y.inner1)} L${r(x.outer2-b)},${r(y.mid1)} L${r(x.outer2)},${r(y.mid1)} L${r(x.outer2)},${r(y.mid2)} L${r(x.outer2-b)},${r(y.mid2)} L${r(x.outer2-b)},${r(y.inner2)} L${r(x.outer2)},${r(y.inner2)} L${r(x.outer2)},${r(h+y.off)}`,
            delay: 3.0, duration: 3.5, strokeWidth: 1.9
        },
        {
            path: `M${r(x.inner2)},${r(-y.off)} L${r(x.inner2)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1+b)} L${r(x.inner2)},${r(y.inner1+b)} L${r(x.inner2)},${r(y.inner2-b)} L${r(x.inner2+b)},${r(y.inner2-b)} L${r(x.inner2+b)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2+b)} L${r(x.inner2)},${r(h+y.off)}`,
            delay: 3.5, duration: 3.8, strokeWidth: 1.6
        },

        // ── Corner connectors ───────────────────────────────────
        { path: `M${r(x.inner1)},${r(y.outer1)} L${r(x.inner1)},${r(y.inner1)}`, delay: 4.0, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner2)},${r(y.outer1)} L${r(x.inner2)},${r(y.inner1)}`, delay: 4.2, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner1)},${r(y.inner2)} L${r(x.inner1)},${r(y.outer2)}`, delay: 4.4, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner2)},${r(y.inner2)} L${r(x.inner2)},${r(y.outer2)}`, delay: 4.6, duration: 1.0, strokeWidth: 1.4 },
    ];

    // Delays are timed to match when the first trace line reaches each pad
    const componentPads = [
        { x: x.outer1, y: y.outer1, delay: 0.4 },   // top-left:     top trace arrives early
        { x: x.inner1, y: y.outer1, delay: 0.8 },   // top-inner-L:  top trace passes 20%
        { x: x.outer1, y: y.outer2, delay: 1.6 },   // bot-left:     bottom trace arrives
        { x: x.outer2, y: y.outer1, delay: 3.0 },   // top-right:    right trace starts
        { x: x.inner2, y: y.outer1, delay: 3.2 },   // top-inner-R:  top trace passes 80%
        { x: x.inner1, y: y.outer2, delay: 2.0 },   // bot-inner-L:  bottom trace passes 20%
        { x: x.inner2, y: y.outer2, delay: 4.5 },   // bot-inner-R:  bottom trace passes 80%
        { x: x.outer2, y: y.outer2, delay: 5.4 },   // bot-right:    bottom trace end
    ];

    // Delays timed to when the first trace reaches each inner corner
    const viaConnections = [
        { x: x.inner1, y: y.inner1, delay: 1.3 },   // top-left inner
        { x: x.inner2, y: y.inner1, delay: 3.5 },   // top-right inner
        { x: x.inner1, y: y.inner2, delay: 2.5 },   // bot-left inner
        { x: x.inner2, y: y.inner2, delay: 4.7 },   // bot-right inner
    ];

    return { circuitTraces, componentPads, viaConnections };
}

function getCircuitSize() {
    const box = document.querySelector('.circuit-pattern').getBoundingClientRect();
    return { w: Math.round(box.width), h: Math.round(box.height) };
}

// Appends one "board" of traces, pads and vias to the SVG and returns its group.
//   'intro'   – first page load: traces draw in on their original schedule, then replay forever
//   'settled' – already drawn: each trace picks up at a random point of its replay cycle
//   'travel'  – the board the camera is flying to: drawn once, quickly, starting from the
//               side the camera comes from (dir = 1 → from the left, -1 → from the right)
function createCircuitBoard(svg, w, h, mode, dir = 1) {
    const { circuitTraces, componentPads, viaConnections } = buildCircuitData(w, h);

    const board = document.createElementNS(SVG_NS, 'g');
    board.classList.add('circuit-board');
    svg.appendChild(board);

    // Travel mode: fraction of the flight at which an x position comes into view
    const arrival = x => 0.25 + 0.4 * (dir > 0 ? x / w : 1 - x / w);
    const travelAnimate = (el, keyframes, start, length) => el.animate(keyframes, {
        delay: start * TRAVEL_DURATION,
        duration: length * TRAVEL_DURATION,
        easing: 'ease-out',
        fill: 'both',
    });

    // Pad / hole size in pixels — fixed to match line thickness
    const padSize = 4;      // 4px half-width → 8px square, matching ~2px line weight
    const holeSize = 1.8;   // small inner hole

    // Create circuit traces
    let horizontalIndex = 0;
    circuitTraces.forEach((trace) => {
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', trace.path);
        path.setAttribute('stroke', '#091bd9');
        path.setAttribute('stroke-width', trace.strokeWidth.toString());
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'square');
        path.setAttribute('stroke-linejoin', 'miter');

        board.appendChild(path);

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();
        path.style.opacity = '0';
        path.style.setProperty('--path-length', pathLength.toString());
        path.classList.add('circuit-trace-react');

        // Horizontal traces carry the camera (and its signal pulses) between boards
        const box = path.getBBox();
        const horizontal = box.width > box.height;
        if (horizontal) path.classList.add('circuit-trace-horizontal');

        if (mode === 'travel') {
            path.style.opacity = '1';

            if (horizontal) {
                // Draw them from the side the camera comes from
                const from = dir > 0 ? pathLength : -pathLength;
                travelAnimate(path, [{ strokeDashoffset: `${from}` }, { strokeDashoffset: '0' }],
                    0.12 + 0.05 * horizontalIndex++, 0.5);
            } else {
                const length = box.height < h / 2 ? 0.15 : 0.3;
                travelAnimate(path, [{ strokeDashoffset: `${pathLength}` }, { strokeDashoffset: '0' }],
                    arrival(box.x), length);
            }
            return;
        }

        const totalCycleDuration = trace.duration + 3;
        const drawPercentage = (trace.duration / totalCycleDuration) * 100;

        let animationName = 'drawTrace40';
        if (Math.round(drawPercentage) <= 15) animationName = 'drawTrace14';
        else if (Math.round(drawPercentage) <= 37) animationName = 'drawTrace36';
        else if (Math.round(drawPercentage) <= 39) animationName = 'drawTrace38';
        else if (Math.round(drawPercentage) <= 41) animationName = 'drawTrace40';
        else animationName = 'drawTrace42';

        // Settled traces start past the drawing phase (all keyframes finish by 42 %)
        const delay = mode === 'settled'
            ? -(0.45 + Math.random() * 0.5) * totalCycleDuration
            : trace.delay;

        path.style.animationDuration = `${totalCycleDuration}s`;
        path.style.animationDelay = `${delay}s`;
        path.style.animationTimingFunction = 'ease-out';
        path.style.animationIterationCount = 'infinite';
        path.style.animationFillMode = 'both';
        path.style.animationName = animationName;
    });

    // Pads, holes and vias pop in on their own schedule in 'intro' and 'travel' modes
    const popIn = (el, delay, duration) => {
        if (mode === 'intro') {
            el.style.animationDuration = `${duration}s`;
            el.style.animationDelay = `${delay}s`;
            el.style.animationTimingFunction = 'ease-out';
            el.style.animationIterationCount = '1';
            el.style.animationFillMode = 'forwards';
            return;
        }
        el.style.animation = 'none';
        el.style.opacity = '1';
        if (mode === 'travel') {
            travelAnimate(el, [{ opacity: 0 }, { opacity: 1 }], arrival(Number(el.dataset.x)) + 0.2, 0.12);
        }
    };

    // Create component pads
    componentPads.forEach((pad) => {
        const g = document.createElementNS(SVG_NS, 'g');

        const rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x', (pad.x - padSize).toString());
        rect.setAttribute('y', (pad.y - padSize).toString());
        rect.setAttribute('width', (padSize * 2).toString());
        rect.setAttribute('height', (padSize * 2).toString());
        rect.setAttribute('fill', '#091bd9');
        rect.setAttribute('rx', (padSize * 0.08).toString());
        rect.classList.add('circuit-pad-react');
        rect.dataset.x = pad.x;
        popIn(rect, pad.delay, 0.3);

        const hole = document.createElementNS(SVG_NS, 'rect');
        hole.setAttribute('x', (pad.x - holeSize).toString());
        hole.setAttribute('y', (pad.y - holeSize).toString());
        hole.setAttribute('width', (holeSize * 2).toString());
        hole.setAttribute('height', (holeSize * 2).toString());
        hole.setAttribute('fill', '#f5f1f0');
        hole.setAttribute('rx', (holeSize * 0.1).toString());
        hole.classList.add('circuit-hole-react');
        hole.dataset.x = pad.x;
        popIn(hole, pad.delay + 0.15, 0.25);

        g.appendChild(rect);
        g.appendChild(hole);
        board.appendChild(g);
    });

    // Create via connections — fixed size to match line thickness
    const viaSize = 3;        // 3px radius
    const viaStroke = 1.8;    // ~2px stroke, same as lines

    viaConnections.forEach((via) => {
        const circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttribute('cx', via.x.toString());
        circle.setAttribute('cy', via.y.toString());
        circle.setAttribute('r', viaSize.toString());
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#091bd9');
        circle.setAttribute('stroke-width', viaStroke.toString());
        circle.classList.add('circuit-via-react');
        circle.dataset.x = via.x;
        popIn(circle, via.delay, 0.3);

        board.appendChild(circle);
    });

    return board;
}

// Signal pulses that race along the horizontal traces, leading the camera
// across each board in turn (boards are given in travel order).
function addSignalPulses(boards, dir) {
    const pulseLength = 140;

    boards.forEach((board, boardIndex) => {
        board.querySelectorAll('.circuit-trace-horizontal').forEach((trace, i) => {
            const pulse = document.createElementNS(SVG_NS, 'path');
            pulse.setAttribute('d', trace.getAttribute('d'));
            pulse.classList.add('circuit-pulse');
            board.appendChild(pulse);

            const length = pulse.getTotalLength();
            pulse.style.strokeDasharray = `${pulseLength} ${length + pulseLength}`;

            // Dash offset pulseLength hides the pulse before the path start, -length past its end
            const keyframes = [{ strokeDashoffset: `${pulseLength}` }, { strokeDashoffset: `${-length}` }];
            if (dir < 0) keyframes.reverse();

            pulse.animate(keyframes, {
                delay: (boardIndex * 0.42 + i * 0.03) * TRAVEL_DURATION,
                duration: 0.5 * TRAVEL_DURATION,
                easing: 'linear',
                fill: 'both',
            });
        });
    });
}

function renderCircuit(mode) {
    const svg = document.querySelector('.circuit-svg');
    if (!svg) return;

    circuitSize = getCircuitSize();
    const { w, h } = circuitSize;

    // Set viewBox to match exact viewport pixels → 1 SVG unit = 1 px
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.replaceChildren();
    createCircuitBoard(svg, w, h, mode);
}

function setupCircuitBackground() {
    renderCircuit('intro');

    // Debounced resize handler – recalculates positions when the viewport changes.
    // Height-only changes from mobile browser toolbars don't affect the 100lvh box.
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (isTravelling) return; // the board is rebuilt when the camera lands
            const { w, h } = getCircuitSize();
            if (w !== circuitSize.w || h !== circuitSize.h) {
                renderCircuit('settled');
            }
        }, 250);
    });
}

const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const smoothstep = (a, b, t) => {
    const x = Math.min(Math.max((t - a) / (b - a), 0), 1);
    return x * x * (3 - 2 * x);
};

// Page transition: the camera glides along the horizontal traces to the next
// board, carrying the old page away and bringing the new one in with it.
function travelToSection(sectionId, dir) {
    isTravelling = true;

    const svg = document.querySelector('.circuit-svg');
    const leaving = document.getElementById('sectionPreview');
    const current = document.getElementById('sectionCurrent');
    const content = current.querySelector('.section-content');
    const { w, h } = circuitSize;

    // Park the outgoing page in a fixed layer, frozen at its scroll position
    const parked = document.createElement('div');
    parked.className = 'section-content';
    parked.style.transform = `translateY(${-window.scrollY}px)`;
    parked.append(...content.childNodes);
    leaving.replaceChildren(parked);

    currentSection = sectionId;
    renderSection(currentSection, content);
    updateNavigation();
    window.scrollTo(0, 0);

    // Lay the destination board next to the current one, along the direction of travel
    const sourceBoard = svg.querySelector('.circuit-board');
    const destinationBoard = createCircuitBoard(svg, w, h, 'travel', dir);
    destinationBoard.setAttribute('transform', `translate(${dir * w}, 0)`);
    addSignalPulses([sourceBoard, destinationBoard], dir);

    document.body.classList.add('is-travelling');
    current.style.transformOrigin = `50% ${h / 2}px`;

    const start = performance.now();

    function frame(now) {
        const t = Math.min((now - start) / TRAVEL_DURATION, 1);
        const progress = easeInOutCubic(t);
        const scale = 1 - CAMERA_PULLBACK * Math.sin(Math.PI * t);

        // Everything is laid out on one wide board; the camera's centre moves by one
        // board width. Both layers scale around the middle of the viewport.
        const camera = `translateX(${-scale * dir * progress * w}px) scale(${scale})`;
        svg.style.transform = camera;
        leaving.style.transform = camera;
        leaving.style.opacity = 1 - smoothstep(0.2, 0.7, t);
        current.style.transform = `translateX(${scale * dir * (1 - progress) * w}px) scale(${scale})`;
        current.style.opacity = smoothstep(0.3, 0.8, t);

        if (t < 1) {
            requestAnimationFrame(frame);
            return;
        }

        // Landed: the destination board becomes the background, identical but settled
        svg.style.transform = '';
        leaving.replaceChildren();
        leaving.style.transform = '';
        leaving.style.opacity = '';
        current.style.transform = '';
        current.style.opacity = '';
        current.style.transformOrigin = '';
        renderCircuit('settled');

        document.body.classList.remove('is-travelling');
        isTravelling = false;
    }

    requestAnimationFrame(frame);
}

// Navigation
function navigateToSection(sectionId) {
    if (sectionId === currentSection || isTravelling) return;

    document
    .querySelector(".hamburger")
    ?.classList.remove("active");

    document
    .querySelector(".nav-content")
    ?.classList.remove("open");

    document.body.classList.remove("menu-open");
    document.body.dataset.page = sectionId;

    // Travel right to sections further along the nav, left to earlier ones
    const from = sections.findIndex(s => s.id === currentSection);
    const to = sections.findIndex(s => s.id === sectionId);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        currentSection = sectionId;
        renderSection(currentSection, document.querySelector('#sectionCurrent .section-content'));
        updateNavigation();
        window.scrollTo(0, 0);
        return;
    }

    travelToSection(sectionId, to > from ? 1 : -1);
}

// Update navigation active state
function updateNavigation() {
    const navButtons = document.querySelectorAll('.nav-button[data-section]');
    navButtons.forEach(button => {
        if (button.dataset.section === currentSection) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update navigation text
    sections.forEach(section => {
        const button = document.querySelector(`[data-section="${section.id}"]`);
        if (button) {
            const textSpan = button.querySelector('.nav-text');
            if (textSpan) {
                textSpan.innerHTML = createKineticText(section.name[language]);
            }
        }
    });

    // Update language button
    const langButton = document.querySelector('.language-toggle .nav-text');
    if (langButton) {
        langButton.innerHTML = createKineticText(
            language === 'en' ? 'FR' : 'EN'
        );
    }
}

// Render section content
function renderSection(sectionId, container) {
    const t = content[language];

    switch (sectionId) {
        case 'hero':
            container.innerHTML = createHeroHTML();
            break;
        case 'about':
            container.innerHTML = createAboutHTML();
            break;
        case 'portfolio':
            container.innerHTML = createPortfolioHTML();
            break;
        case 'contact':
            container.innerHTML = createContactHTML();
            break;
    }

    // Re-initialize Lucide icons
    lucide.createIcons();
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

// Create HTML for each section
function createHeroHTML() {
    const t = content[language];
    return `
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Ariane Saulnier</h1>
                <p class="hero-subtitle">${t.hero.subtitle}</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" data-action="navigate" data-target="about">${t.hero.learnMore}</button>
                    <button class="btn btn-outline" data-action="navigate" data-target="portfolio">${t.hero.viewPortfolio}</button>
                </div>
            </div>
        </div>
    `;
}

function createAboutHTML() {
    const t = content[language];

    const skillCategoriesHTML = t.about.skillCategories.map(cat => `
        <div class="skill-category">
            <div class="skill-category-name">${cat.name}</div>
            <ul class="skill-category-list">
                ${cat.items.split(', ').map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p class="skill-category-practice">${cat.practice}</p>
        </div>
    `).join('');

    const educationHTML = t.about.educationItems.map(item => `
        <div class="cv-item">
            <div class="cv-item-header">
                <span class="cv-item-title">${item.school}</span>
                <span class="cv-dates">${item.dates}</span>
            </div>
            <p class="cv-item-meta">${item.location}</p>
            <p class="cv-item-description">${item.degree}</p>
        </div>
    `).join('');

    const experienceHTML = t.about.experienceItems.map(item => `
        <div class="cv-item">
            <div class="cv-item-header">
                <span class="cv-item-title">${item.title}</span>
                <span class="cv-dates">${item.dates}</span>
            </div>
            <p class="cv-item-meta">${item.company}</p>
            <p class="cv-item-description">${item.description}</p>
            <p class="cv-item-location">${item.location}</p>
        </div>
    `).join('');

    return `
        <div class="about-section">
            <div class="container">
                <h2 class="section-title">${t.about.title}</h2>
                <div class="about-card">
                    <div class="about-profile">
                        <img src="images/profile-pic.jpg" alt="Ariane Saulnier" class="profile-pic">
                        <p class="about-description">${t.about.profile}</p>
                    </div>

                    <div class="about-section-item">
                        <h3 class="about-section-title">${t.about.skillsTitle}</h3>
                        <div class="skill-categories">
                            ${skillCategoriesHTML}
                        </div>
                    </div>

                    <div class="about-section-item">
                        <h3 class="about-section-title">${t.about.experienceTitle}</h3>
                        <div class="cv-items">
                            ${experienceHTML}
                        </div>
                    </div>

                    <div class="about-section-item">
                        <h3 class="about-section-title">${t.about.educationTitle}</h3>
                        <div class="cv-items">
                            ${educationHTML}
                        </div>
                    </div>

                    <div class="about-section-item">
                        <h3 class="about-section-title">${t.about.languagesTitle}</h3>
                        <div class="languages-interests-grid">
                            <div>
                                <div class="skill-category-name">${t.about.languagesSubtitle}</div>
                                <ul class="skill-category-list">
                                    ${t.about.languages.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <div class="skill-category-name">${t.about.interestsSubtitle}</div>
                                <ul class="skill-category-list">
                                    ${t.about.interests.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createPortfolioHTML() {
    const t = content[language];
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

    const tagsHTML = (tags) => tags.map(tag =>
        `<span class="project-tag">${tag}</span>`
    ).join('');

    const featuredProjectHTML = (item, index) => {
        const link = getProjectLink(item);

        return `
        <article class="project-showcase ${index % 2 !== 0 ? 'reverse' : ''}">
            
            <div class="project-image">
                ${
                    item.image
                    ? `<img src="${item.image}" alt="${item.title}">`
                    : `<div class="project-placeholder">
                        <i data-lucide="${item.icon}"></i>
                      </div>`
                }
            </div>

            <div class="project-content">

                <span class="project-category">
                    ${item.category}
                </span>

                <h3>${item.title}</h3>

                <p>
                    ${item.description}
                </p>

                <div class="project-tags">
                    ${tagsHTML(item.tags)}
                </div>

                <a href="${link}" class="project-link">
                    ${item.slug === 'book-club' || item.slug === 'bigwatts'
                    ? t.portfolio.viewCaseStudy
                    : t.portfolio.viewProject}
                    <i data-lucide="arrow-right"></i>
                </a>

            </div>

        </article>
        `;
    };


    const technicalProjectHTML = (item) => {
        const link = getProjectLink(item);

        return `
        <article class="technical-project">

            <div class="technical-icon">
                <i data-lucide="${item.icon}"></i>
            </div>

            <div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>

                <div class="project-tags">
                    ${tagsHTML(item.tags)}
                </div>
            </div>

            <a href="${link}">
                ${t.portfolio.viewProject}
            </a>

        </article>
        `;
    };


    const featured = items.filter(item => item.featured);
    const technical = items.filter(item => !item.featured);


    return `
    <div class="portfolio-section">

        <div class="container">

            <header class="portfolio-header">

                <h2 class="section-title">
                    ${t.portfolio.featuredTitle}
                </h2>



            </header>


            <section class="featured-projects">


                ${featured.map((item,index)=> 
                    featuredProjectHTML(item,index)
                ).join('')}


            </section>



            <section class="technical-projects">


                <div class="technical-grid">

                    ${technical.map(item =>
                        technicalProjectHTML(item)
                    ).join('')}

                </div>


            </section>


        </div>

    </div>
    `;
}

function createContactHTML() {
    const t = content[language];

    return `
        <div class="contact-section">
            <div class="container">
                <h2 class="section-title">${t.contact.title}</h2>
                <p class="contact-subtitle">${t.contact.subtitle}</p>
                
                <div class="contact-buttons">
                    <a href="mailto:ariane.saulnier@gmail.com" class="btn btn-primary contact-btn">
                        <i data-lucide="mail"></i>
                        <span>ariane.saulnier@gmail.com</span>
                    </a>
                    <a href="https://github.com/aria-vero-s" target="_blank" rel="noopener noreferrer" class="btn btn-outline contact-btn">
                        <i data-lucide="github"></i>
                        <span>${t.contact.github}</span>
                    </a>
                    <a href="https://linkedin.com/in/ariane-saulnier" target="_blank" rel="noopener noreferrer" class="btn btn-outline contact-btn">
                        <i data-lucide="linkedin"></i>
                        <span>${t.contact.linkedin}</span>
                    </a>
                </div>

                <div class="contact-form-container">
                    <h3 class="form-title">${t.contact.formTitle}</h3>
                    <form class="contact-form" action="https://formspree.io/f/mdkkpqwy" method="POST">
                        <div class="form-row">
                            <div class="form-field">
                                <label for="name">${t.contact.nameLabel}</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-field">
                                <label for="email">${t.contact.emailLabel}</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="message">${t.contact.messageLabel}</label>
                            <textarea id="message" name="message" rows="5" placeholder="${t.contact.messagePlaceholder}" required></textarea>
                        </div>

                        <div class="form-submit">
                            <button type="submit" class="btn btn-primary">${t.contact.sendButton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// Toggle language
function toggleLanguage() {
    language = language === 'en' ? 'fr' : 'en';

    // Update current section content
    const currentContainer = document.getElementById('sectionCurrent').querySelector('.section-content');
    renderSection(currentSection, currentContainer);

    // Update navigation
    updateNavigation();
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
        if (e.target.closest('[data-action="navigate"]')) {
            const target = e.target.closest('[data-action="navigate"]').dataset.target;
            navigateToSection(target);
        }

        if (e.target.closest('[data-section]')) {
            const section = e.target.closest('[data-section]').dataset.section;
            navigateToSection(section);
        }

        if (e.target.closest('.language-toggle')) {
            toggleLanguage();
        }
    });

    document.addEventListener('mouseenter', (e) => {
        const navText = e.target.closest('.nav-button .nav-text');

        if (navText) {
            scrambleNavText(navText);
        }
    }, true);

    // document.addEventListener('submit', (e) => {
    //     if (e.target.matches('.contact-form')) {
    //         e.preventDefault();
    //         console.log('Form submitted');
    //     }
    // });

    document.addEventListener('submit', async (e) => {
        if (!e.target.matches('.contact-form')) return;
        e.preventDefault();
      
        const form = e.target;
        const data = new FormData(form);
      
        try {
          const res = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
          });
      
          if (!res.ok) throw new Error('Network error');
      
          // Replace the form with your custom message:
          form.innerHTML = `
            <div class="thank-you">
              <h3>Thanks for reaching out!</h3>
              <p>I’ve received your message and will get back to you soon.</p>
              <p>Best regards,</p>
              <p>Ariane</p>
              <hr>
              <h3>Merci pour votre message !</h3>
            <p>J’ai bien reçu votre message et je vous répondrai bientôt.</p>
            <p>Cordialement,</p>
            <p>Ariane</p>
            </div>`;
        } catch (err) {
          form.insertAdjacentHTML('beforeend', `
            <p class="error">Oops—something went wrong. Please try again.</p>
          `);
          console.error(err);
        }
      });      
}

// Initialize application
function init() {
    // Setup event listeners
    setupEventListeners();

    // Check if a specific section was requested via URL param (e.g. ?section=portfolio)
    const params = new URLSearchParams(window.location.search);
    const requestedSection = params.get('section');
    if (requestedSection && sections.some(s => s.id === requestedSection)) {
        currentSection = requestedSection;
    }

    document.body.dataset.page = currentSection;
    setupCircuitBackground();

    // Show initial section
    const currentContainer = document.getElementById('sectionCurrent');
    renderSection(currentSection, currentContainer.querySelector('.section-content'));

    // Update navigation
    updateNavigation();

    // Initialize Lucide icons
    lucide.createIcons();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
