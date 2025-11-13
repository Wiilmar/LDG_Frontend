# 🏫 Colegio León de Greiff - Sistema de Gestión (Frontend)

Sistema web de gestión administrativa para el Colegio León de Greiff, desarrollado con React, TypeScript, Tailwind CSS y Vite.

## 📋 Descripción

Aplicación web para la gestión administrativa del colegio, que incluye:

- ✅ **Inicio de sesión** con validaciones y protección de rutas
- ✅ **Consulta pública** de documentos por número de identificación  
- ✅ **Panel administrativo** para gestión (en desarrollo)
- ✅ **Roles de usuario**: Administradores, Profesores, Mantenimiento

## 🛠️ Tecnologías

- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Navegación
- **Axios** - Cliente HTTP
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **React Icons** - Iconografía

## 📁 Estructura del Proyecto

```
LDG_Frontend/
├── public/
│   └── assets/
│       └── images/              # ⬅️ AGREGAR IMÁGENES AQUÍ
│           ├── logo-colegio.png
│           ├── estudiantes-foto.jpg
│           └── universidades/
│               ├── univalle.png
│               ├── javeriana.png
│               └── icesi.png
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── common/             # Botones, Inputs, Loaders
│   │   ├── layout/             # Header, Footer, Layout
│   │   └── auth/               # LoginForm, PasswordInput
│   ├── pages/                  # Páginas principales
│   │   ├── Login.tsx
│   │   ├── Consulta.tsx
│   │   ├── Dashboard.tsx
│   │   └── NotFound.tsx
│   ├── services/               # Servicios de API
│   ├── hooks/                  # Custom Hooks
│   ├── context/                # Context API
│   ├── types/                  # Tipos TypeScript
│   ├── utils/                  # Utilidades y validaciones
│   └── routes/                 # Configuración de rutas
├── .env                        # Variables de entorno
└── package.json
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Agregar imágenes requeridas

Coloca las siguientes imágenes en `public/assets/images/`:

- `logo-colegio.png` - Logo del colegio
- `estudiantes-foto.jpg` - Foto de estudiantes en aula
- `universidades/univalle.png` - Logo Universidad del Valle
- `universidades/javeriana.png` - Logo Javeriana
- `universidades/icesi.png` - Logo ICESI

### 3. Configurar variables de entorno

El archivo `.env` ya está creado con:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Colegio León de Greiff
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

## 📱 Funcionalidades Implementadas

### ✅ Inicio de Sesión
- Validación de campos (usuario y contraseña)
- Input de contraseña con botón de visualización (ojo)
- Protección contra ataques XSS
- Mensajes de error descriptivos
- Diseño responsivo según mockup de Figma

### ✅ Consulta Pública
- Búsqueda por número de identificación
- Solo acepta números en el campo de búsqueda
- Muestra documentos PDF con botón de descarga
- Mensaje "No existen documentos" cuando no hay resultados
- Indicador de carga mientras busca
- Acceso público (no requiere autenticación)

### ✅ Rutas Protegidas
- Dashboard solo accesible después del login
- Redirección automática si no está autenticado
- Persistencia de sesión en localStorage

## 🔐 Seguridad

- ✅ Sanitización de inputs para prevenir XSS
- ✅ Validación de datos en frontend y backend
- ✅ Tokens JWT para autenticación
- ✅ Rutas protegidas con ProtectedRoute
- ✅ Manejo seguro de errores
- ✅ Timeout de peticiones HTTP (10s)

## 🎨 Diseño UI/UX

- Diseño basado en mockups de Figma proporcionados
- Panel izquierdo: Formularios (Login/Consulta)
- Panel derecho: Imagen de estudiantes / Resultados
- Colores corporativos del colegio (azul primario)
- Logos de universidades en footer
- Responsive design
- Animaciones y transiciones suaves

## 🔄 Próximas Funcionalidades

El dashboard se expandirá con módulos adicionales según tus requerimientos:
- Gestión de usuarios
- Carga y gestión de documentos PDF
- Reportes y estadísticas
- Y más módulos que especifiques...

## 📝 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Ejecutar linter
```

## 🔗 Conexión con Backend

Este frontend se conecta con el repositorio `LDG_Backend`.

Asegúrate de que el backend esté corriendo en la URL configurada en `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

## 👨‍💻 Desarrollo

Creado con TypeScript para mayor seguridad y mantenibilidad.
Arquitectura modular y escalable para futuras expansiones.

## 📄 Licencia

© 2025 Colegio León de Greiff. Todos los derechos reservados.
