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
  - The home page is a row of full-screen scenes (bio, one per project, contact), built by `home.js` and styled in `home.css`. Each scene holds still while the reader scrolls through it, then the next one slides up over it like a card, and the covered one steps back
  - One bold, even line in big sweeps and loops runs through all of them (see the references in `inspirations/`): each scene has its stretch, which leaves the bottom of the screen where the next comes in at the top. It passes over the project pictures and clear of the words
  - Scrolling draws the line while the scene holds still; the next scene only starts to arrive once the line has reached the bottom of the screen. At the top of the page nothing is drawn
  - Landing: the statement appears first, its words rising into place, then the nav
  - Rule: the line is never straight. Wherever a stretch would run straight, `home.js` makes it sway until it does not (`neverStraight`; check with `straightest()` in the console)
  - The last scene is the water the line has been heading for: blue, with a moving surface, the contact text in the background colour and the line in it too
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
- Mark new elements with the `rv` class to have them rise in when their scene arrives; the routes the line takes are in `ROUTES` in home.js.

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
