import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/svelte-app/',
  build: {
    outDir: '../../dist/svelte-app'
  },
  plugins: [svelte()],
})
