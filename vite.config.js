import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // Jika sedang di-build di Vercel/Production umum, gunakan '/'
  // Jika untuk GitHub Pages, gunakan '/RIDHODEV/'
  base: process.env.VERCEL ? '/' : '/RIDHODEV/',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})