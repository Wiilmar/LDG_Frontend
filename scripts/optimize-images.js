/**
 * Script para optimizar imágenes
 * 
 * Este script comprime imágenes JPG/PNG y opcionalmente las convierte a WebP
 * para mejorar el rendimiento de carga de la aplicación.
 * 
 * Instalación de dependencias:
 * npm install --save-dev sharp
 * 
 * Uso:
 * node scripts/optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/assets/images');
const QUALITY = 80; // Calidad de compresión (0-100)

// Función para obtener todos los archivos de imagen
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Función para optimizar una imagen
async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const outputPath = imagePath.replace(/\.[^.]+$/, '.optimized$&');
  const webpPath = imagePath.replace(/\.[^.]+$/, '.webp');

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    console.log(`\n📸 Procesando: ${path.basename(imagePath)}`);
    console.log(`   Tamaño original: ${metadata.width}x${metadata.height}`);

    // Comprimir imagen original
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await image
        .png({ compressionLevel: 9, quality: QUALITY })
        .toFile(outputPath);
    }

    // Crear versión WebP
    await sharp(imagePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    // Mostrar tamaños
    const originalSize = fs.statSync(imagePath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const webpSize = fs.statSync(webpPath).size;

    console.log(`   ✅ Original: ${formatBytes(originalSize)}`);
    console.log(`   ✅ Optimizado: ${formatBytes(optimizedSize)} (${Math.round((1 - optimizedSize / originalSize) * 100)}% reducción)`);
    console.log(`   ✅ WebP: ${formatBytes(webpSize)} (${Math.round((1 - webpSize / originalSize) * 100)}% reducción)`);

    // Reemplazar original con optimizado
    fs.unlinkSync(imagePath);
    fs.renameSync(outputPath, imagePath);

  } catch (error) {
    console.error(`❌ Error procesando ${imagePath}:`, error.message);
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

// Ejecutar optimización
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');

  const images = getAllImages(IMAGES_DIR);
  console.log(`📦 Encontradas ${images.length} imágenes para optimizar\n`);

  for (const imagePath of images) {
    await optimizeImage(imagePath);
  }

  console.log('\n✨ ¡Optimización completada!\n');
  console.log('💡 Recomendaciones:');
  console.log('   - Usa las imágenes WebP cuando el navegador lo soporte');
  console.log('   - Implementa lazy loading para las imágenes');
  console.log('   - Considera usar CDN para servir las imágenes\n');
}

main().catch(console.error);
