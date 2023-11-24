import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  // base: 'https://some.cdn.com/',
  root: path.join(__dirname, 'src/ui'),
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, 'dist/ui'),
    emptyOutDir: true,
  },
  define: {
    'process.env': {},
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
