/**
 * Plugin de Vite para generar automáticamente versiones WebP
 * 
 * Este plugin se ejecuta durante el build y genera versiones WebP
 * de todas las imágenes JPG/PNG automáticamente.
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';

interface WebPGeneratorOptions {
  quality?: number;
  sourceDir?: string;
  includePublic?: boolean;
}

export function viteWebPGenerator(options: WebPGeneratorOptions = {}): Plugin {
  const {
    quality = 80,
    sourceDir = 'public/assets/images',
    includePublic = true,
  } = options;

  let rootDir = '';

  return {
    name: 'vite-webp-generator',
    
    configResolved(config) {
      rootDir = config.root;
    },

    async buildStart() {
      if (!includePublic) return;

      const imagesDir = path.join(rootDir, sourceDir);
      
      if (!fs.existsSync(imagesDir)) {
        console.warn(`⚠️  Directorio de imágenes no encontrado: ${imagesDir}`);
        return;
      }

      console.log('\n🖼️  Generando versiones WebP...');
      await generateWebPVersions(imagesDir, quality);
    },
  };
}

async function generateWebPVersions(dir: string, quality: number) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let processed = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      // Procesar subdirectorios recursivamente
      await generateWebPVersions(fullPath, quality);
    } else if (/\.(jpe?g|png)$/i.test(file.name)) {
      // Generar versión WebP
      const webpPath = fullPath.replace(/\.(jpe?g|png)$/i, '.webp');
      
      // Solo generar si no existe o si la original es más nueva
      if (!fs.existsSync(webpPath) || 
          fs.statSync(fullPath).mtime > fs.statSync(webpPath).mtime) {
        
        try {
          const originalSize = fs.statSync(fullPath).size;
          
          await sharp(fullPath)
            .webp({ quality })
            .toFile(webpPath);
          
          const webpSize = fs.statSync(webpPath).size;
          const savings = Math.round((1 - webpSize / originalSize) * 100);
          
          console.log(`  ✅ ${file.name} → WebP (${savings}% más pequeño)`);
          processed++;
        } catch (error) {
          console.error(`  ❌ Error procesando ${file.name}:`, error);
        }
      }
    }
  }

  if (processed > 0) {
    console.log(`\n✨ ${processed} imágenes convertidas a WebP\n`);
  }
}
