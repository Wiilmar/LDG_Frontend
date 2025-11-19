/**
 * Watcher de Imágenes - Optimización en desarrollo
 * 
 * Este script observa la carpeta de imágenes y optimiza automáticamente
 * cualquier imagen nueva que se agregue.
 * 
 * Uso: npm run watch:images
 */

import chokidar from 'chokidar';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/assets/images');
const QUALITY = 80;

console.log('🔍 Observando cambios en imágenes...\n');
console.log(`📁 Directorio: ${IMAGES_DIR}\n`);

// Función para optimizar una imagen
async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  
  if (!/\.(jpg|jpeg|png)$/i.test(ext)) {
    return;
  }

  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fileName = path.basename(imagePath);

  try {
    console.log(`📸 Procesando: ${fileName}`);
    
    const originalSize = fs.statSync(imagePath).size;
    const image = sharp(imagePath);

    // Generar versión WebP
    await image
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const savings = Math.round((1 - webpSize / originalSize) * 100);

    console.log(`   ✅ WebP generado (${formatBytes(originalSize)} → ${formatBytes(webpSize)}, ${savings}% más pequeño)\n`);

  } catch (error) {
    console.error(`   ❌ Error procesando ${fileName}:`, error.message, '\n');
  }
}

// Función para formatear bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Inicializar watcher
const watcher = chokidar.watch(IMAGES_DIR, {
  ignored: /\.webp$/,
  persistent: true,
  ignoreInitial: true,
});

// Eventos
watcher
  .on('add', (filePath) => {
    console.log(`➕ Nueva imagen detectada: ${path.basename(filePath)}`);
    optimizeImage(filePath);
  })
  .on('change', (filePath) => {
    console.log(`🔄 Imagen modificada: ${path.basename(filePath)}`);
    optimizeImage(filePath);
  })
  .on('error', (error) => {
    console.error('❌ Error en watcher:', error);
  });

console.log('✨ Listo! Agrega o modifica imágenes en la carpeta y se optimizarán automáticamente.\n');
console.log('💡 Presiona Ctrl+C para detener el watcher.\n');
