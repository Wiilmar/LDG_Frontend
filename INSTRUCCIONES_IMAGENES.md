# 📸 INSTRUCCIONES COMPLETAS PARA AGREGAR IMÁGENES

## ⚠️ IMPORTANTE: Son 3 tipos de imágenes que debes agregar

Tu diseño de Figma tiene **3 componentes visuales principales**:
1. **Logo del Colegio** (en el header)
2. **Imagen de Fondo** (estudiantes en el aula - panel derecho)
3. **Logos de Universidades** (en el footer)

---

## 📂 Ubicación de las imágenes

Todas las imágenes deben colocarse en:
```
C:\LDG_Frontend\public\assets\images\
```

---

## 🎯 Imágenes Requeridas (TODAS son necesarias)

### 1️⃣ **Logo del Colegio León de Greiff**

**Archivo:** `logo-colegio.png`  
**Ubicación:** `public/assets/images/logo-colegio.png`

**Descripción:**
- Logo oficial del Colegio León de Greiff (el escudo que aparece en tu Figma)
- Es el que tiene las iniciales "C" y dice "COLEGIO LEON DE GREIFF"

**¿Dónde aparece?**
- En el **HEADER** (parte superior) de todas las páginas
- Se ve junto al texto "COLEGIO LEON DE GREIFF"

**Especificaciones:**
- Formato: **PNG con fondo transparente**
- Tamaño recomendado: **200x200px** o mayor
- Resolución: Alta (para pantallas retina)
- Debe ser exactamente el logo de tu diseño

**Ejemplo de cómo se verá:**
```
[Logo] COLEGIO LEON DE GREIFF
       Sistema de gestión administrativa
```

---

### 2️⃣ **Imagen de Fondo (Estudiantes en el Aula)**

**Archivo:** `estudiantes-foto.jpg`  
**Ubicación:** `public/assets/images/estudiantes-foto.jpg`

**Descripción:**
- Fotografía de los estudiantes en el salón de clases
- Es la imagen grande que aparece en el **PANEL DERECHO** de tu diseño de Figma
- La que acompaña al formulario de login y de consulta

**¿Dónde aparece?**
- En el **panel DERECHO** de la página de Login
- En el **panel DERECHO** de la página de Consulta
- Ocupa aproximadamente 2/3 de la pantalla en escritorio

**Especificaciones:**
- Formato: **JPG** o PNG
- Tamaño recomendado: **1920x1080px** o mayor (Full HD)
- Proporción: **16:9** preferiblemente
- Alta calidad/resolución
- Debe ser la misma imagen que usaste en Figma

**Ejemplo de layout:**
```
┌────────────┬─────────────────────────┐
│ Formulario │  [Imagen Estudiantes]   │
│   Login    │  (esta es la imagen)    │
└────────────┴─────────────────────────┘
```

---

### 3️⃣ **Logos de Universidades (Convenios Educativos)**

Primero, crea la carpeta: `public/assets/images/universidades/`

Luego agrega los siguientes logos:

#### a) **Universidad de San Buenaventura Cali**
**Archivo:** `san-buenaventura.png`  
**Ruta completa:** `public/assets/images/universidades/san-buenaventura.png`

#### b) **Pontificia Universidad Javeriana**
**Archivo:** `javeriana.png`  
**Ruta completa:** `public/assets/images/universidades/javeriana.png`

#### c) **Universidad ICESI**
**Archivo:** `icesi.png`  
**Ruta completa:** `public/assets/images/universidades/icesi.png`

#### d) **Otras universidades** (si hay más en tu Figma)
Agrégalas con nombres descriptivos (ej: `universidad-nacional.png`)

**¿Dónde aparecen?**
- En el **FOOTER** (parte inferior) de todas las páginas
- Aparecen en fila, uno al lado del otro

**Especificaciones:**
- Formato: **PNG con fondo transparente**
- Tamaño aproximado: **150x80px** (ancho x alto)
- Resolución: Alta para pantallas retina
- Deben ser los logos oficiales de cada universidad

**Ejemplo de cómo se verán:**
```
[Logo Univalle]  [Logo Javeriana]  [Logo ICESI]
```

---

## 📁 Estructura Final (EXACTA) que debes tener

```
public/
└── assets/
    └── images/
        ├── logo-colegio.png          ⬅️ Logo del colegio (HEADER)
        ├── estudiantes-foto.jpg      ⬅️ Imagen de fondo (PANEL DERECHO)
        └── universidades/            ⬅️ Carpeta de logos
            ├── san-buenaventura.png  ⬅️ Logo Universidad de San Buenaventura
            ├── javeriana.png         ⬅️ Logo Javeriana
            └── icesi.png             ⬅️ Logo ICESI
```

---

## 🚀 Pasos para Agregar las Imágenes

### Paso 1: Preparar las imágenes
1. Extrae de tu diseño de Figma las 3 imágenes principales:
   - Logo del colegio
   - Foto de estudiantes
   - Logos de universidades

### Paso 2: Renombrar los archivos
2. Renombra los archivos EXACTAMENTE como se indica:
   - `logo-colegio.png`
   - `estudiantes-foto.jpg`
   - `univalle.png`
   - `javeriana.png`
   - `icesi.png`

### Paso 3: Colocar en las carpetas
3. Abre el Explorador de Archivos
4. Navega a: `C:\LDG_Frontend\public\assets\images\`
5. Copia `logo-colegio.png` aquí
6. Copia `estudiantes-foto.jpg` aquí
7. Crea la carpeta `universidades`
8. Dentro de `universidades`, copia los logos de las universidades

---

## ✅ Checklist de Verificación

Antes de iniciar el proyecto, verifica que tengas:

- [ ] ✅ `logo-colegio.png` en `public/assets/images/`
- [ ] ✅ `estudiantes-foto.jpg` en `public/assets/images/`
- [ ] ✅ Carpeta `universidades` creada
- [ ] ✅ `san-buenaventura.png` en `public/assets/images/universidades/`
- [ ] ✅ `javeriana.png` en `public/assets/images/universidades/`
- [ ] ✅ `icesi.png` en `public/assets/images/universidades/`

---

## 🎨 Dónde se Usa Cada Imagen

| Imagen | Ubicación en la App | Tamaño en pantalla |
|--------|---------------------|-------------------|
| **Logo del Colegio** | Header (todas las páginas) | ~64x64px (pequeño) |
| **Foto Estudiantes** | Panel derecho (Login y Consulta) | 2/3 de la pantalla |
| **Logos Universidades** | Footer (todas las páginas) | ~48px alto cada uno |

## Estructura final esperada:

```
public/
└── assets/
    └── images/
        ├── logo-colegio.png
        ├── estudiantes-foto.jpg
        └── universidades/
            ├── univalle.png
            ├── javeriana.png
            └── icesi.png
```

## ¿Cómo agregar las imágenes?

1. Abre el explorador de archivos de Windows
2. Navega a la carpeta del proyecto: `C:\LDG_Frontend\public\assets\images\`
3. Copia y pega las imágenes en sus ubicaciones correspondientes
4. Asegúrate de que los nombres sean exactamente como se especifican arriba

## Verificación

Una vez agregadas las imágenes:
1. Inicia el proyecto: `npm run dev`
2. Abre el navegador en `http://localhost:3000`
3. Verifica que:
   - El logo aparezca en el header
   - La foto de estudiantes aparezca en el panel derecho
   - Los logos de universidades aparezcan en el footer

## Notas importantes:

- ⚠️ Los nombres de archivo deben ser exactamente como se especifican (minúsculas, sin espacios)
- ⚠️ Si una imagen no carga, verifica que el nombre y la ubicación sean correctos
- ⚠️ El código ya tiene manejo de errores para ocultar imágenes que no cargan
- ✅ Las rutas en el código ya están configuradas correctamente

## Próximos pasos después de agregar las imágenes:

1. Verifica que todas las imágenes se vean correctamente
2. Puedes proceder a conectar con el backend (LDG_Backend)
3. Avísame si necesitas ajustar algún diseño o funcionalidad
