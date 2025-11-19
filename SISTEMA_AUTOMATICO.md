# 🚀 Sistema de Optimización Automática - Guía Rápida

## ✅ ¡Ya está configurado!

Tu proyecto ahora tiene **optimización automática de imágenes**. Cada vez que agregues o modifiques una imagen, se optimizará automáticamente.

## 🎯 Cómo Funciona

### Durante el Build (Producción)
```bash
npm run build
```
✨ **Automáticamente**:
- Comprime todas las imágenes JPG/PNG
- Genera versiones WebP
- Muestra estadísticas de ahorro
- Todo en `dist/` estará optimizado

### Durante el Desarrollo
```bash
# Terminal 1: Servidor de desarrollo
npm run dev

# Terminal 2: Watcher de imágenes (opcional)
npm run watch:images
```

Con el watcher activo:
1. Agregas una imagen a `public/assets/images/`
2. Se genera automáticamente su versión WebP
3. Ves el progreso en consola

## 📋 Workflow Recomendado

### Para nuevas imágenes:

#### Opción 1: Con Watcher (Recomendado en desarrollo)
```bash
# Inicia el watcher
npm run watch:images

# En otra terminal, inicia el servidor
npm run dev

# Ahora solo copia tus imágenes a public/assets/images/
# Se optimizarán automáticamente
```

#### Opción 2: Build automático (Para producción)
```bash
# Solo agrega tus imágenes normalmente
# Al hacer build, se optimizan automáticamente
npm run build
```

#### Opción 3: Manual (Optimizar todo de una vez)
```bash
npm run optimize:images
```

## 🎨 Ejemplo Práctico

### Agregar imágenes al carrusel:

1. **Con watcher activo**:
```bash
# Terminal 1
npm run watch:images

# Copia tu imagen
copy C:\Downloads\foto.jpg public\assets\images\carrusel\img-carrusel-8.jpg

# ✨ Automáticamente verás:
# 📸 Procesando: img-carrusel-8.jpg
# ✅ WebP generado (2.1MB → 180KB, 91% más pequeño)
```

2. **Sin watcher (en build)**:
```bash
# Solo copia la imagen
copy C:\Downloads\foto.jpg public\assets\images\carrusel\img-carrusel-8.jpg

# Haz build
npm run build

# Se optimiza automáticamente durante el build
```

## 📊 Configuración Actual

### Calidad de Compresión: 80%
```
JPG: 80% calidad, progresivo
PNG: 80% calidad, nivel 9
WebP: 80% calidad
```

### Para ajustar la calidad:
Edita `vite.config.ts`:
```typescript
jpg: {
  quality: 85, // Cambia aquí (0-100)
  progressive: true,
}
```

## 🔍 Ver Resultados

### Durante el build:
```bash
npm run build

# Verás en consola:
# 🖼️  Generando versiones WebP...
# ✅ img-carrusel-1.jpg → WebP (85% más pequeño)
# ✅ img-carrusel-2.jpg → WebP (87% más pequeño)
# ...
# ✨ 7 imágenes convertidas a WebP
```

### Archivos generados:
```
public/assets/images/carrusel/
├── img-carrusel-1.jpg      (original optimizado)
├── img-carrusel-1.webp     (versión WebP - automática)
├── img-carrusel-2.jpg
├── img-carrusel-2.webp
└── ...
```

## 💡 Ventajas del Sistema Automático

✅ **No requiere acción manual** - Solo agrega imágenes normalmente
✅ **Optimización en build** - Siempre en producción
✅ **WebP automático** - Mejor formato sin esfuerzo
✅ **Estadísticas claras** - Ves el ahorro en tiempo real
✅ **Sin duplicar trabajo** - Solo procesa imágenes nuevas/modificadas

## 🎯 Comandos Disponibles

```bash
# Desarrollo con optimización en vivo
npm run watch:images

# Optimizar todas las imágenes existentes
npm run optimize:images

# Build con optimización automática
npm run build

# Desarrollo normal (sin optimización en vivo)
npm run dev
```

## 🔧 Optimizar Imágenes Existentes (Una vez)

Para optimizar las 7 imágenes del carrusel que ya tienes:

```bash
npm run optimize:images
```

Esto procesará TODAS las imágenes en `public/assets/images/` y generará versiones WebP.

## ⚙️ Configuración Avanzada

### Cambiar directorio observado:
Edita `scripts/watch-images.js`:
```javascript
const IMAGES_DIR = path.join(__dirname, '../public/assets/images');
```

### Cambiar calidad de compresión:
Edita `scripts/watch-images.js`:
```javascript
const QUALITY = 85; // Cambia aquí
```

### Excluir carpetas:
Edita `vite.config.ts`:
```typescript
ViteImageOptimizer({
  exclude: /node_modules|temp/,
  // ...
})
```

## 🆘 Solución de Problemas

### "El watcher no detecta imágenes"
→ Verifica que estés en la carpeta correcta
→ Reinicia el watcher: Ctrl+C y `npm run watch:images`

### "Las imágenes no se optimizan en build"
→ Verifica `vite.config.ts`
→ Asegúrate que `includePublic: true`

### "Quiero desactivar la optimización"
→ Comenta los plugins en `vite.config.ts`

## 📈 Próximos Pasos

1. **Ahora mismo**: Ejecuta `npm run optimize:images` para optimizar las existentes
2. **En desarrollo**: Usa `npm run watch:images` para auto-optimizar nuevas
3. **En producción**: `npm run build` optimiza automáticamente

---

**¡Listo!** Tu sistema de optimización automática está configurado. 
Solo agrega imágenes y déjalo trabajar. 🚀
