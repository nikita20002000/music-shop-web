import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/music-shop-web',
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [react()],
})
