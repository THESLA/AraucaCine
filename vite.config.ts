import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { execSync } from 'child_process'

const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
  }
})
