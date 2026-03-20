import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lockarddesignco.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
