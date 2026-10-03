import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: {
        home: 'index.html',
        services: 'services/index.html',
        about: 'about/index.html',
        results: 'results/index.html',
        faq: 'faq/index.html',
        contact: 'contact/index.html'
      }
    }
  }
});
