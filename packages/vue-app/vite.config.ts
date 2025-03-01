import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-app/',
  build: {
    outDir: '../../dist/vue-app'
  },
  plugins: [vue()],
})
