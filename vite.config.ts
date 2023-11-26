import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // base: 'https://some.cdn.com/',
  root: path.join(__dirname, 'src/ui'),
  plugins: [react(), tsconfigPaths()],
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
        target: process.env.API_SERVICE_URL || 'http://service-api:8080',
        changeOrigin: true,
      },
    },
  },
});
