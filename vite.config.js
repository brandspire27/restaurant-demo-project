import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so assets resolve correctly in dev, preview, production,
  // GitHub Pages (served from a subpath), and when opening the built file directly.
  base: './',
  plugins: [react()],
})
