# Saffron & Smoke — Premium Fine Dining Restaurant Website

A visually stunning, modern, luxury restaurant landing website built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Fully responsive and deployable on GitHub Pages.

## ✨ Features

- **Single-page luxury experience** with smooth-scroll navigation
- **Sticky Navbar** with mobile hamburger menu
- **Full-screen Hero** with fade-in animations
- **About section** with restaurant story, chef intro & statistics
- **Menu section** with animated category filtering (Starters, Main Course, Desserts)
- **Gallery** with masonry grid, hover animations & full lightbox (keyboard navigable)
- **Chef showcase** with experience highlights & quote
- **Customer reviews** with star ratings
- **Reservation form** (frontend-only) with success message
- **Contact section** with info cards & embedded map
- **Footer** with logo, navigation & social links
- **Fully responsive** — mobile (320px), tablet (768px), desktop (1920px)
- **SEO-friendly** with meta tags, Open Graph & favicon
- **Real stock photography** via the Unsplash CDN (food, chef & restaurant photos) — requires an internet connection to view images

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#0B0B0B` |
| Gold | `#C9A227` |
| Cream | `#F8F3EA` |
| Headings | Playfair Display |
| Body | Poppins |

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Router | Routing |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

## 📦 GitHub Pages Deployment

This project is preconfigured for GitHub Pages.

1. Update the `base` path in [`vite.config.js`](vite.config.js) to match your repository name:
   ```js
   base: '/your-repository-name/'
   ```
2. Update the `homepage` field in [`package.json`](package.json) to your GitHub Pages URL.
3. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

Alternatively, use the included GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for automatic deployment on push to `main`.

## 📁 Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── scripts/
│   └── generate-assets.mjs      # SVG asset generator
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/                  # Hero, gallery & dish imagery
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   └── images.js            # Centralized image references
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Reveal.jsx           # Scroll-reveal wrapper
    │   ├── SectionHeading.jsx
    │   ├── ScrollToTop.jsx
    │   └── home/
    │       ├── Hero.jsx
    │       ├── About.jsx
    │       ├── Menu.jsx
    │       ├── Gallery.jsx
    │       ├── Chef.jsx
    │       ├── Reviews.jsx
    │       ├── Reservation.jsx
    │       └── Contact.jsx
    ├── data/
    │   ├── menu.js
    │   ├── gallery.js
    │   └── reviews.js
    └── pages/
        └── Home.jsx
```

## 🖼️ Imagery

All food, chef, and restaurant photography is served from the **Unsplash CDN** via
[`src/assets/images.js`](src/assets/images.js). URLs use the official
`images.unsplash.com/photo-<id>` format with sizing/crop query params — no API key
required.

> ⚠️ **Internet required:** Because images are loaded from the Unsplash CDN, they
> will not display when offline. The local SVG placeholders in `public/images/`
> are no longer referenced by the app but are kept for reference / fallback.

To swap a photo, edit its URL in [`src/assets/images.js`](src/assets/images.js).
The legacy SVG generator remains available at
[`scripts/generate-assets.mjs`](scripts/generate-assets.mjs) if you want to revert
to offline placeholders.

## 📝 Notes

- This is a **frontend-only** project — no backend, database, authentication, or payment gateway.
- The reservation form shows a success message on submit without sending data anywhere.
