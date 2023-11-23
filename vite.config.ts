import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: path.join(__dirname, 'src/ui'),
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, 'dist/ui'),
  },
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
