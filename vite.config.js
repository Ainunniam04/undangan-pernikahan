import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// PENTING untuk GitHub Pages:
// Ganti '/nama-repo-kamu/' di bawah dengan nama repository GitHub kamu.
// Contoh: kalau repo-nya "undangan-asri-fikri", maka base = '/undangan-asri-fikri/'
export default defineConfig({
  plugins: [vue()],
  base: '/undangan-pernikahan/',
})
