import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studiopiras.it',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
