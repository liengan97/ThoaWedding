import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // Output folder
    sourcemap: false, // Disable source maps
    minify: "terser", // Minify with Terser for smaller bundles
  },
})
