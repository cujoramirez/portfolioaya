import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion'],
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion', 'lucide-react'],
  },
})
