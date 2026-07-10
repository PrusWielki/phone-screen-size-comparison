// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://PrusWielki.github.io',
  base: '/phone-screen-size-comparison',
  vite: {
    plugins: [tailwindcss()],
  },
});
