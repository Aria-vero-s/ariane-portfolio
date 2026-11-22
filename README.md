# Ariane Saulnier – Portfolio Website

This is my bilingual personal portfolio website.

I am a UI/UX Designer and Web Developer based in Paris. The website is designed to showcase projects and services, while providing a visually interactive user experience.

Live preview: [arianesaulnier.com](https://arianesaulnier.com)  
GitHub: [github.com/aria-vero-s/ariane-portfolio](https://github.com/aria-vero-s/ariane-portfolio)

## Features

- **Bilingual Support** (EN / FR)  
- **Guide Line**: one continuous stroke of ink, drawn down the page by scrolling  
- **Stacked Project Cards**: one project at a time, each card sliding over the last  
- **Lucide Icon Integration**  
- **Interactive Portfolio Showcase**  
- **Fully Responsive Design**

## Style & Design

The design is modern, with focus on usability and minimalism:

- **Color Palette**  
  - Primary blue: `#091bd9`  
  - Light neutrals: `#f5f1f0` (background) & borders with subtle transparency around blue  
- **Typography**  
  - System font stack (`-apple-system`, `Segoe UI`, `Roboto`, ...) for optimal legibility and performance  
  - Hierarchy: section titles (2 rem), sub-section titles (1.5 rem), body text (1 rem), all from the tokens in `variables.css`
- **Interactions & Transitions**  
  - Smooth transitions: hover states on nav, buttons, cards  
  - The home page is one long strip laid out sideways (bio, each project, contact), built by `home.js` and styled in `home.css`. Scrolling (or a sideways swipe, or the arrow keys) travels along it: slowly past each stop, far and fast across the open stretches between them
  - One even line, in long smooth sweeps, runs ahead of the reader the whole way: under one stop, over the next, swinging the full height of the screen in between. It runs further ahead the faster the reader goes. At the very start nothing is drawn
  - Landing: the statement appears first, its words rising into place, then the nav
  - Rule: the line is never straight. Wherever a stretch would run straight, `home.js` makes it sway until it does not (`neverStraight`; check with `straightest()` in the console)
  - The journey ends at the water: a blue stop with a moving shore, the contact text in the background colour; the line runs into it
  - With `prefers-reduced-motion` the content is simply there and the line is fully drawn
- **Layout & Responsiveness**  
  - Central fixed navigation that scrolls to each section and follows the scroll; a slide-in menu on mobile  
  - Content sits in one column; the bio keeps to the left of it and the cards to the middle, leaving room for the line  
  - Responsive grid systems:
- **Components**
  - The line is the only decoration; everything else is type, cards and space

## Built With

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Lucide Icons** (via CDN)
- **SVG** for the line

## Project Structure

```plaintext
├── index.html              # Main HTML file
├── styles.css              # Shared styles (nav, tokens), also used by the project pages
├── home.css                # The home page: scenes, posters, contact
├── home.js                 # Content, scenes, the line, scrolling and navigation
├── images/                 # Project and section images
├── favicon.ico             # Site icon
└── README.md               # This file
```

## Getting Started

To run locally:
```
git clone https://github.com/Aria-vero-s/ariane-portfolio.git
```
No build process or dependencies—fully static and works offline.

## Language Toggle

The site supports English and French. Toggle switches language dynamically without reloading.

## Portfolio Projects

| Project Name           | Description                                | Live Link | GitHub |
|------------------------|--------------------------------------------|-----------|--------|
| Music Festival         | Wordpress Music Festival Website             | [Live](https://fmclacbaker.com) | –         |
| Marketplace Website    | Marketplace website for services           | (WIP)     | [Code](https://github.com/ariastoryreport-wq/bigwatts) |
| Book Club Website       | Book club with OpenBook API and GoogleBooks API        | –         | [Live](https://aria-vero-s.github.io/book-club/) |
| C Arcade Game          | Retro arcade game written in C             | –         | [Code](https://github.com/aria-vero-s/so_long) |


## Customization

To add new items:

- Update portfolioItems and content in home.js.
- Add images in images/
- the path the line takes is laid out in `waypoints()` in home.js.

## Contact

Reach out via:

- Email: ariane.saulnier@gmail.com
- GitHub: [aria-vero-s](https://github.com/Aria-vero-s)
- LinkedIn: [in/ariane-saulnier/](https://www.linkedin.com/in/ariane-saulnier/)

## License

This project is **not open source** and is provided with **All Rights Reserved**.  
You may not copy, modify, distribute, or use any part of this code without explicit written permission.

## Author

Ariane Saulnier
UI/UX Designer & Web Developer
Based in Paris (originally Canada)
Student at École 42, Code Institute alumna

## Versions (branches)

`main` is the live site (arianesaulnier.com) and is not to be changed until a version is chosen. Three takes on the home page, each led by one line, are kept on their own branches:

- `guide-line`: one vertical page; a bold line in big sweeps and loops drawn by the scroll; stacked project cards; water rising at the end
- `poster-scenes`: full-screen scenes that stack like cards, the line crossing each one over the pictures
- `horizontal-line`: a sideways journey; a thinner, smoother line that runs ahead of the reader

Standing rules for the line: it is only ever a line, it is never straight, nothing is drawn at the very start, the bio statement is visible first and then the nav, and the site ends in blue "water" with the contact text on it. The reference images (`inspirations/`) are kept out of the repository.
