/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { execSync } from 'child_process'
import compress from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compress({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false }),
    visualizer({ filename: 'dist/stats.html', open: false, gzipSize: true, brotliSize: true }),
  ],
  base: '/AraucaCine/',
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash)
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          router: ['react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  }
})
