import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],

  // ═══════════════════════════════════════════════
  // Build Optimizations (SEO + Core Web Vitals)
  // ═══════════════════════════════════════════════
  build: {
    // Target modern browsers for smaller bundles
    target: 'esnext',

    // Minimize CSS
    cssMinify: true,

    // Use esbuild for faster, smaller output
    minify: 'esbuild',

    // Split chunks to improve cache efficiency & LCP
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — always cached separately
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion — lazy split (large lib)
          'vendor-motion': ['framer-motion'],
          // Icons — separate split
          'vendor-icons': ['lucide-react'],
        },
      },
    },

    // Warn on chunks > 500KB (helps catch bloat)
    chunkSizeWarningLimit: 500,
  },

  // ═══════════════════════════════════════════════
  // Dev server optimizations
  // ═══════════════════════════════════════════════
  server: {
    port: 5173,
    open: false,
    // Enable compression in dev (closer to production)
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },

  // ═══════════════════════════════════════════════
  // Asset handling — for SEO-friendly file names
  // ═══════════════════════════════════════════════
  assetsInclude: ['**/*.webp', '**/*.avif', '**/*.woff2'],
})
