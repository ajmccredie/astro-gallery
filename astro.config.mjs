import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: 'static',
  base: isProd ? '/astro-gallery' : '/', 
  integrations: [react()],
  vite: { plugins: [tailwind()] }
});
