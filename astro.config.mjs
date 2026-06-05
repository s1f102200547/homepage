import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://s1f102200547.github.io',
  base: '/REPO',           // リポジトリ名に合わせて変更すること
  vite: {
    plugins: [tailwindcss()],
  },
});