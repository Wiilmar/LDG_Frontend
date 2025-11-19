# Dashboard Rediseñado - Documentación

## 📋 Resumen de Implementación

Se ha completado el rediseño completo del Dashboard según las especificaciones proporcionadas.

## 🎨 Paleta de Colores

### Panel Izquierdo (Sidebar)
- **Fondo**: `#1E4F91`
- **Texto**: `#FFFFFF`
- **Botones en reposo**: `#1E4F91`
- **Botones hover**: `#FFFFFF` (fondo blanco, texto `#1E4F91`)
- **Botones activos/click**: `#00214D`
- **Botón Cerrar Sesión**: `#212D3C`

### Panel Derecho (Contenido)
- **Fondo**: Gradiente lineal de `#B5D5FF` (16%) a `#E0EDFF` (100%)
- **Títulos y Footer**: `#93ACCC`
- **Texto de cards**: Negro
- **Cards**: Fondo blanco con sombras

## 🏗️ Estructura del Dashboard

### 1. Sidebar (Barra Lateral Izquierda)

**Elementos:**
- ✅ Imagen de usuario (placeholder configurado)
- ✅ Rango dinámico (ADMINISTRADOR / DOCENTE)
- ✅ Línea separadora
- ✅ Botones de navegación:
  - Inicio
  - Certificado
  - Mantenimiento
- ✅ Botón "Cerrar sesión" (separado al final)

**Características:**
- Navegación activa con resaltado visual
- Placeholders para iconos (preparados para enlazar imágenes)
- Responsivo con menú hamburguesa en móvil
- Overlay oscuro en móvil al abrir el menú

### 2. Panel Derecho (Contenido)

**Cards implementadas:**

1. **Card de Bienvenida**
   - Saludo personalizado con nombre del usuario
   - Descripción del sistema

2. **Card Certificados**
   - Espacio para icono (placeholder)
   - Descripción de funcionalidad
   - Botón "Certificaciones" → navega a `/certificado`

3. **Card Mantenimiento**
   - Espacio para icono (placeholder)
   - Descripción de funcionalidad
   - Botón "Mantenimiento" → navega a `/mantenimiento`

4. **Card Actualización**
   - Espacio para icono (placeholder)
   - Descripción de funcionalidad
   - Botón "Ver más" → navega a `/dashboard`

5. **Footer Card**
   - Derechos de autor
   - Texto en color `#93ACCC`

## 🔐 Sistema de Autenticación Temporal

Se implementó autenticación con usuarios mock (será reemplazado por backend):

### Usuarios Disponibles:

**Usuario 1 - Administrador:**
- Usuario: `wilman`
- Contraseña: `wilman2025`
- Rango: ADMINISTRADOR

**Usuario 2 - Docente:**
- Usuario: `wiliam`
- Contraseña: `wiliam2025`
- Rango: DOCENTE

**Archivo:** `src/data/mockUsers.ts`

Para cambiar a autenticación real, modificar en `src/services/authService.ts`:
```typescript
const USE_MOCK_AUTH = false; // Cambiar a false cuando se conecte al backend
```

## 🛣️ Rutas Creadas

- `/dashboard` - Dashboard principal (Inicio)
- `/certificado` - Página de Certificados
- `/mantenimiento` - Página de Mantenimiento

Todas las rutas están protegidas y requieren autenticación.

## 📱 Responsividad

### Desktop (≥1024px)
- Sidebar fijo a la izquierda (64 unidades de ancho)
- Panel derecho con grid de 3 columnas para las cards

### Tablet (768px - 1023px)
- Sidebar desplegable
- Grid de 2 columnas para cards

### Móvil (<768px)
- Sidebar oculto por defecto
- Botón hamburguesa en esquina superior izquierda
- Grid de 1 columna para cards
- Overlay oscuro al abrir menú

## 🖼️ Placeholders para Imágenes

### Ubicaciones preparadas para agregar imágenes:

**Sidebar:**
- Imagen de usuario (circular, 96x96px)
- Iconos de navegación con atributo `data-icon`:
  - `icon-inicio`
  - `icon-certificado`
  - `icon-mantenimiento`
  - `icon-logout`

**Dashboard Cards:**
- Iconos de funcionalidades con atributo `data-icon`:
  - `icon-certificado`
  - `icon-mantenimiento`
  - `icon-actualizacion`

### Para agregar las imágenes:

1. Subir imágenes a `/public/assets/images/icons/`
2. Enlazar en el componente correspondiente reemplazando el placeholder

**Ejemplo en Sidebar:**
```tsx
{/* ANTES */}
<div className="w-6 h-6 bg-white/20 rounded" data-icon="icon-inicio"></div>

{/* DESPUÉS */}
<img src="/assets/images/icons/icono-inicio.png" alt="Inicio" className="w-6 h-6" />
```

## 📁 Archivos Creados/Modificados

### Nuevos Archivos:
- `src/data/mockUsers.ts` - Usuarios temporales
- `src/components/layout/Sidebar.tsx` - Barra lateral de navegación
- `src/pages/Certificado.tsx` - Página de certificados
- `src/pages/Mantenimiento.tsx` - Página de mantenimiento

### Archivos Modificados:
- `src/pages/Dashboard.tsx` - Rediseño completo
- `src/services/authService.ts` - Autenticación con usuarios mock
- `src/types/auth.types.ts` - Agregado rol 'docente'
- `src/utils/constants.ts` - Agregadas rutas CERTIFICADO y MANTENIMIENTO
- `src/routes/AppRoutes.tsx` - Agregadas rutas protegidas

## ✨ Animaciones

- Entrada suave de cards con retrasos escalonados
- Hover effects en cards y botones
- Transiciones fluidas en navegación
- Animación de apertura/cierre del sidebar móvil

## 🎯 Próximos Pasos

1. **Subir iconos** a `/public/assets/images/icons/`
2. **Enlazar iconos** en Sidebar y Cards
3. **Subir imagen de usuario** (opcional)
4. **Implementar funcionalidades** en páginas Certificado y Mantenimiento
5. **Conectar con backend** cuando esté disponible

## 🔧 Mantenimiento

Para cambiar colores, editar las constantes en los archivos correspondientes:
- Sidebar: `src/components/layout/Sidebar.tsx`
- Dashboard: `src/pages/Dashboard.tsx`

Para agregar nuevas secciones de navegación, editar:
```typescript
const NAV_ITEMS: NavItem[] = [
  { label: 'Nuevo Item', ruta: '/nueva-ruta', iconPlaceholder: 'icon-nombre' },
];
```
