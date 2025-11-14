# 🎨 Aya's Portfolio

Multi-page portfolio for graphic designer **Fatimah Az Zahra (Aya)**, built with React, React Router, and Material UI. The experience now adapts to desktop, tablet, and mobile with dedicated pages for home, projects, and contact plus animated route transitions.

## ✨ Highlights

- Multi-page navigation (Home / Projects / Contact) with smooth scroll-to-section links
- Responsive layouts: grid hero on desktop, swipeable table-of-contents on tablet, stacked sections on mobile
- Framer Motion page transitions coordinated with the site's gradient palette
- Lazy-loaded project imagery for better mobile performance
- Shared scroll helpers that respect the fixed navbar height across breakpoints
- Actionable contact CTAs (email, LinkedIn, phone) alongside the visual contact board

## 🧱 Tech Stack

- React 19 + TypeScript
- Vite 7
- React Router DOM 7
- Material UI 7
- Framer Motion 12
- Lucide React icons

## 📁 Notable Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Layout, Footer, transitions
│   ├── sections/      # Hero, TOC, Experience, Projects, Contact
│   └── theme/         # MUI theme configuration
├── hooks/             # useHashScroll
├── pages/             # HomePage, ProjectsPage, ContactPage
├── utils/             # scroll helpers, animation presets
└── main.tsx           # Router + Theme providers
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (comes with Node) or pnpm/yarn if preferred

### Installation & Dev Server

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and the app will hot-reload on changes.

### Production Build & Preview

```bash
npm run build
npm run preview
```

`npm run build` outputs the static site to `dist/`. `npm run preview` serves that folder locally for smoke-testing before deployment.

## 🌐 Deployment

Any static host works:

1. **Vercel** – import the repo, set the build command to `npm run build`, output directory `dist`.
2. **Netlify** – same commands; drag-drop the `dist` folder for manual deploys.
3. **Static hosting / S3 / CloudFront** – upload the `dist` folder and enable SPA fallback (rewrite all routes to `index.html`).

## 📱 Responsiveness Notes

- Navbar collapses to a drawer under 960px and maintains scroll-safe offsets via `scrollMarginTop`.
- Table of contents becomes a horizontal snap carousel on tablet/mobile for easier swiping.
- Background-heavy sections adjust `background-size`/`position` to avoid cropped content on narrow screens.
- All gallery assets are lazy-loaded to keep initial payloads lean on cellular connections.

## 📧 Contact

- **Email**: [ayafatimah11@gmail.com](mailto:ayafatimah11@gmail.com)
- **LinkedIn**: [linkedin.com/in/fatimah-az-zahra]([https://www.linkedin.com/in/fatimah-az-zahra](https://www.linkedin.com/in/fatimah-az-zahra-032956386/))
- **Behance**: [behance.net/ayafatimah18](https://www.behance.net/ayafatimah18)
- **Phone**: +62 895333333689

---

© 2025 Fatimah Az Zahra. All rights reserved.
