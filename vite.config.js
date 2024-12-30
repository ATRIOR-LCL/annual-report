import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/onlinejudge3/annual-report-2024',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  experimental: {
    renderBuiltUrl(filename) {
      let cdnUrl = process.env.CDN_URL || '';
      if (!cdnUrl.endsWith('/')) {
        cdnUrl += '/';
      }
      return `${cdnUrl}${filename}`;
    },
  },
});
