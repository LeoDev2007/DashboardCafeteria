import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Substituído __dirname por import.meta.dirname para compatibilidade nativa futura
      '@': path.resolve(import.meta.dirname, './src'), 
    },
  },
})
