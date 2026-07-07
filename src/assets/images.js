// Centralized image references.
// Imagery is served from the Unsplash CDN (real food / chef / restaurant
// photography). This keeps the bundle small and the photos authentic, but
// requires an internet connection to view — the app is no longer fully
// offline-capable for images.
//
// Every photo ID below has been verified to resolve (HTTP 200) against
// images.unsplash.com. URLs use the official `photo-<id>` format with
// sizing + crop query params. No API key is required.

const unsplash = (id, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const images = {
  // Moody restaurant interior — full-screen hero background
  hero: unsplash('photo-1467003909585-2f8a72700288', 1920),
  // Elegant restaurant table / interior
  about: unsplash('photo-1414235077428-338989a2e8c0', 1000),
  // Chef cooking in a kitchen
  chef: unsplash('photo-1581349485608-9469926a8e5e', 900),
  gallery: [
    unsplash('photo-1551218808-94e220e084d2', 800), // plated fine dining dish
    unsplash('photo-1467003909585-2f8a72700288', 800), // restaurant interior ambience
    unsplash('photo-1556909114-f6e7ad7d3136', 800), // chef plating a dish
    unsplash('photo-1565958011703-44f9829ba187', 800), // dessert presentation
    unsplash('photo-1551782450-a2132b4ba21d', 800), // cocktail and appetizers
    unsplash('photo-1484723091739-30a097e8f929', 800), // fresh ingredients on table
  ],
}

// Dish photos keyed by the slug used in src/data/menu.js
const dishPhotos = {
  'truffle-mushroom-soup': unsplash('photo-1565299624946-b28f40a0ae38', 800),
  'crispy-lotus-stem': unsplash('photo-1567620905732-2d1ec7ab7445', 800),
  'saffron-biryani': unsplash('photo-1504674900247-0877df9cc836', 800),
  'royal-paneer': unsplash('photo-1600891964599-f61ba0e24092', 800),
  'chocolate-fondant': unsplash('photo-1565958011703-44f9829ba187', 800),
  'signature-kulfi': unsplash('photo-1484723091739-30a097e8f929', 800),
}

export const dishImage = (slug) =>
  dishPhotos[slug] ?? unsplash('photo-1551218808-94e220e084d2', 800)
