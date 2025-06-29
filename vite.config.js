import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/QrCode/', 
  build: {
    outDir: 'docs', 
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].js',
        chunkFileNames: 'static/js/[name].js',
        assetFileNames: 'static/media/[name].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: 'localhost', 
  }
})
