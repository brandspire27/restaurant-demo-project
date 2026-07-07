// One-time asset generator: creates elegant SVG placeholder images for the
// restaurant website. Run with: node scripts/generate-assets.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const publicDir = join(root, 'public')

const GOLD = '#C9A227'
const GOLD_LIGHT = '#E0BE4A'
const PRIMARY = '#0B0B0B'
const CREAM = '#F8F3EA'

// Warm, food-inspired palettes tuned for a light/cream theme.
// Rich but luminous backgrounds so imagery reads on a light page.
const palettes = [
  { bg1: '#f3e2c0', bg2: '#e8c98f', glow: '#C9A227' }, // saffron cream
  { bg1: '#f6dcc4', bg2: '#e9b896', glow: '#C0392B' }, // warm terracotta
  { bg1: '#efe6cf', bg2: '#dcc59a', glow: '#9C7E1C' }, // golden tan
  { bg1: '#f7e0d8', bg2: '#e8b4a6', glow: '#C0392B' }, // blush wine
  { bg1: '#e7eede', bg2: '#c4d6b0', glow: '#7C9070' }, // soft herb
  { bg1: '#f0e3d0', bg2: '#d8bf9c', glow: '#9C7E1C' }, // caramel
]

// Build a decorative SVG with a rich gradient background, glow, ornamental
// rings, a plate motif, and a label.
function svg({ w = 1200, h = 800, label, sub = '', palette = palettes[0] }) {
  const { bg1, bg2, glow } = palette
  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) / 2.6
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg1}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0" stop-color="${glow}" stop-opacity="0.35"/>
      <stop offset="0.6" stop-color="${glow}" stop-opacity="0.08"/>
      <stop offset="1" stop-color="${glow}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="plate" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${CREAM}" stop-opacity="0.10"/>
      <stop offset="0.7" stop-color="${CREAM}" stop-opacity="0.04"/>
      <stop offset="1" stop-color="${CREAM}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <!-- ornamental plate -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#plate)"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${glow}" stroke-width="1.5" opacity="0.25"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.72}" fill="none" stroke="${glow}" stroke-width="1" opacity="0.18"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.5}" fill="none" stroke="${glow}" stroke-width="1" opacity="0.12"/>
  <!-- steam wisps -->
  <g opacity="0.18" stroke="${CREAM}" stroke-width="2" fill="none" stroke-linecap="round">
    <path d="M${cx - 30} ${cy - r * 0.4} q 10 -20 0 -40 t 0 -40"/>
    <path d="M${cx + 30} ${cy - r * 0.4} q -10 -20 0 -40 t 0 -40"/>
  </g>
  <g transform="translate(${cx} ${cy})">
    <text text-anchor="middle" y="-6" font-family="Playfair Display, Georgia, serif" font-size="${Math.round(w / 16)}" font-weight="700" fill="${GOLD_LIGHT}">${label}</text>
    ${sub ? `<text text-anchor="middle" y="${Math.round(w / 26)}" font-family="Poppins, sans-serif" font-size="${Math.round(w / 42)}" fill="${CREAM}" opacity="0.7" letter-spacing="2">${sub.toUpperCase()}</text>` : ''}
  </g>
</svg>`
}

function write(path, content) {
  const full = join(publicDir, path)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, content.trim() + '\n', 'utf8')
  console.log('✓', path)
}

// --- Hero (wide, cinematic) ---
write('images/hero.svg', svg({ w: 1920, h: 1080, label: 'Saffron & Smoke', sub: 'Premium Fine Dining', palette: palettes[0] }))

// --- About (portrait) ---
write('images/about.svg', svg({ w: 800, h: 1000, label: 'Our Story', sub: 'Est. 2014', palette: palettes[1] }))

// --- Chef (portrait) ---
write('images/chef.svg', svg({ w: 800, h: 1000, label: 'Chef Aarav Singh', sub: 'Executive Head Chef', palette: palettes[5] }))

// --- Gallery (mixed) ---
const galleryLabels = [
  ['gallery-1', 'Plated Perfection', 'Signature Dish', 0],
  ['gallery-2', 'The Ambience', 'Interior', 1],
  ['gallery-3', 'The Craft', 'Chef at Work', 5],
  ['gallery-4', 'Sweet Endings', 'Dessert', 3],
  ['gallery-5', 'Cocktail Hour', 'Bar', 2],
  ['gallery-6', 'Fresh & Local', 'Ingredients', 4],
]
galleryLabels.forEach(([file, label, sub, p]) =>
  write(`images/${file}.svg`, svg({ w: 1000, h: 1000, label, sub, palette: palettes[p] }))
)

// --- Dish images (4:3) ---
const dishes = [
  ['truffle-mushroom-soup', 'Truffle Soup', 'Starters', 4],
  ['crispy-lotus-stem', 'Crispy Lotus Stem', 'Starters', 3],
  ['saffron-biryani', 'Saffron Biryani', 'Main Course', 2],
  ['royal-paneer', 'Royal Paneer', 'Main Course', 0],
  ['chocolate-fondant', 'Chocolate Fondant', 'Desserts', 5],
  ['signature-kulfi', 'Signature Kulfi', 'Desserts', 1],
]
dishes.forEach(([file, label, sub, p]) =>
  write(`images/dishes/${file}.svg`, svg({ w: 1200, h: 900, label, sub, palette: palettes[p] }))
)

// --- Favicon ---
write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${PRIMARY}"/>
  <path d="M32 12c-2 6-8 8-8 16 0 6 4 10 8 10s8-4 8-10c0-4-2-6-4-8 0 3-1 5-3 6 1-5-1-10-1-14z" fill="${GOLD}"/>
  <circle cx="32" cy="44" r="3" fill="${GOLD_LIGHT}"/>
</svg>`)

// --- Open Graph image ---
write('og-image.svg', svg({ w: 1200, h: 630, label: 'Saffron & Smoke', sub: 'Experience Culinary Excellence', palette: palettes[0] }))

console.log('\n✅ All assets regenerated in /public')
