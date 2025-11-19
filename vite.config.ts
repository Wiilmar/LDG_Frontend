import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { viteWebPGenerator } from './vite-plugins/webp-generator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin para generar automáticamente versiones WebP
    viteWebPGenerator({
      quality: 80,
      sourceDir: 'public/assets/images',
      includePublic: true,
    }),
    // Plugin para optimizar todas las imágenes
    ViteImageOptimizer({
      // Configuración para JPG
      jpg: {
        quality: 80,
        progressive: true,
      },
      // Configuración para PNG
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      // Configuración para WebP
      webp: {
        quality: 80,
      },
      // Opciones generales
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: undefined,
      includePublic: true, // Optimiza también las imágenes en public/
      logStats: true, // Muestra estadísticas en consola
      // Generar versión WebP automáticamente
      cache: false,
      cacheLocation: undefined,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@context': path.resolve(__dirname, './src/context'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
