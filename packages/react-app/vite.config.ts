import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-app/',
  build: {
    outDir: '../../dist/react-app'
  },
  plugins: [react()],
})
