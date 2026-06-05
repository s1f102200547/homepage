import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/REPO',           // ユーザーサイト (username.github.io) なら '/'
  vite: {
    plugins: [tailwindcss()],
  },
});