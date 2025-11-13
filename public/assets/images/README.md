# 📸 Carpeta de Imágenes

## ⚠️ IMPORTANTE: Debes agregar TODAS estas imágenes para que la aplicación funcione correctamente

Esta carpeta debe contener **TODAS** las imágenes que aparecen en tu diseño de Figma.

---

## 📋 Imágenes Requeridas

### 1️⃣ **Logo del Colegio**
**Archivo:** `logo-colegio.png`  
**Ubicación:** `public/assets/images/logo-colegio.png`

**Descripción:**
- Logo oficial del Colegio León de Greiff (escudo con las letras "C")
- Se muestra en el encabezado de TODAS las páginas

**Especificaciones:**
- Formato: PNG con fondo transparente
- Tamaño recomendado: 200x200px o mayor
- Alta resolución para pantallas retina
- Debe ser el logo que aparece en tu mockup de Figma

---

### 2️⃣ **Imagen de Fondo del Login/Consulta**
**Archivo:** `estudiantes-foto.jpg`  
**Ubicación:** `public/assets/images/estudiantes-foto.jpg`

**Descripción:**
- Fotografía de los estudiantes en el salón de clases
- Se muestra en el **panel DERECHO** de las páginas de Login y Consulta
- Es la imagen que aparece en tu diseño de Figma

**Especificaciones:**
- Formato: JPG o PNG
- Tamaño recomendado: 1920x1080px o mayor (Full HD)
- Proporción: 16:9 preferiblemente
- Alta calidad para que se vea nítida
- Esta es la imagen principal que acompaña el formulario de login

---

### 3️⃣ **Logos de Universidades (Convenios Educativos)**

En la subcarpeta `universidades/` debes agregar los logos que aparecen en el **footer** del diseño:

#### a) **Universidad de San Buenaventura Cali**
**Archivo:** `universidades/san-buenaventura.png`  
**Ubicación:** `public/assets/images/universidades/san-buenaventura.png`

#### b) **Pontificia Universidad Javeriana**
**Archivo:** `universidades/javeriana.png`  
**Ubicación:** `public/assets/images/universidades/javeriana.png`

#### c) **Universidad ICESI**
**Archivo:** `universidades/icesi.png`  
**Ubicación:** `public/assets/images/universidades/icesi.png`

#### d) **Otras universidades (si aplica)**
Si hay más logos de universidades en tu diseño, agrégalos con nombres descriptivos.

**Especificaciones para logos de universidades:**
- Formato: PNG con fondo transparente
- Tamaño aproximado: 150x80px (ancho x alto)
- Alta resolución para pantallas retina
- Se muestran en el footer (pie de página) de todas las páginas

---

## 📁 Estructura Final Esperada

```
public/assets/images/
├── logo-colegio.png          ⬅️ Logo del Colegio León de Greiff
├── estudiantes-foto.jpg      ⬅️ Imagen de fondo (estudiantes en aula)
└── universidades/
    ├── san-buenaventura.png  ⬅️ Logo Universidad de San Buenaventura
    ├── javeriana.png         ⬅️ Logo Pontificia Universidad Javeriana
    └── icesi.png             ⬅️ Logo Universidad ICESI
```

---

## 🎯 Dónde se Usa Cada Imagen

| Imagen | Ubicación en la App | Descripción |
|--------|---------------------|-------------|
| `logo-colegio.png` | Header (todas las páginas) | Logo oficial del colegio |
| `estudiantes-foto.jpg` | Panel derecho (Login y Consulta) | Imagen de fondo principal |
| `universidades/*.png` | Footer (todas las páginas) | Convenios educativos |

---

## ✅ Verificación

Una vez que hayas agregado TODAS las imágenes:

1. ✅ Logo del colegio aparece en el header
2. ✅ Imagen de estudiantes aparece en el panel derecho de Login
3. ✅ Imagen de estudiantes aparece en el panel derecho de Consulta
4. ✅ Logos de universidades aparecen en el footer

---

## 📝 Notas Importantes

- ⚠️ **SIN estas imágenes, la aplicación NO se verá como tu diseño de Figma**
- ⚠️ Los nombres de archivo deben ser **exactamente** como se especifican (minúsculas, sin espacios)
- ⚠️ Las imágenes deben estar en las ubicaciones exactas indicadas
- ✅ El código ya tiene manejo de errores para ocultar imágenes que no cargan
- ✅ Si una imagen no se ve, verifica el nombre y la ruta

---

## 🚀 ¿Cómo Agregar las Imágenes?

1. Abre el Explorador de Archivos de Windows
2. Navega a: `C:\LDG_Frontend\public\assets\images\`
3. Copia y pega las imágenes en sus ubicaciones correspondientes
4. Asegúrate de que los nombres sean exactos

---

**¿Listo?** Una vez agregadas todas las imágenes, ejecuta `npm run dev` y verifica que todo se vea como en tu diseño de Figma.
