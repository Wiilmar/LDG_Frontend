# 📚 DOCUMENTACIÓN DE ARQUITECTURA DEL PROYECTO

## Índice
1. [Estructura de Carpetas](#estructura-de-carpetas)
2. [Explicación de Cada Módulo](#explicación-de-cada-módulo)
3. [Flujo de Autenticación](#flujo-de-autenticación)
4. [Flujo de Consulta](#flujo-de-consulta)
5. [Componentes Reutilizables](#componentes-reutilizables)
6. [Manejo de Estados](#manejo-de-estados)

---

## Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables de React
│   ├── common/         # Componentes genéricos compartidos
│   ├── layout/         # Componentes de estructura (Header, Footer)
│   └── auth/           # Componentes específicos de autenticación
│
├── pages/              # Páginas/Vistas principales de la app
│   ├── Login.tsx       # Página de inicio de sesión
│   ├── Consulta.tsx    # Página de consulta pública
│   ├── Dashboard.tsx   # Panel administrativo
│   └── NotFound.tsx    # Página 404
│
├── services/           # Lógica de comunicación con el backend
│   ├── api.ts          # Configuración de Axios + interceptors
│   ├── authService.ts  # Servicios de autenticación
│   └── consultaService.ts  # Servicios de consulta
│
├── hooks/              # Custom Hooks de React
│   ├── useAuth.ts      # Hook para gestión de autenticación
│   └── useConsulta.ts  # Hook para gestión de consultas
│
├── context/            # Context API para estado global
│   └── AuthContext.tsx # Contexto de autenticación
│
├── types/              # Definiciones de tipos TypeScript
│   ├── auth.types.ts   # Tipos de autenticación
│   ├── user.types.ts   # Tipos de usuarios
│   ├── consulta.types.ts  # Tipos de consulta
│   └── index.ts        # Exportaciones centralizadas
│
├── utils/              # Funciones utilitarias
│   ├── constants.ts    # Constantes globales
│   ├── validators.ts   # Funciones de validación
│   └── helpers.ts      # Funciones auxiliares
│
├── routes/             # Configuración de rutas
│   ├── AppRoutes.tsx   # Definición de todas las rutas
│   └── ProtectedRoute.tsx  # Componente de rutas protegidas
│
├── App.tsx             # Componente raíz
├── main.tsx            # Punto de entrada
├── index.css           # Estilos globales + Tailwind
└── vite-env.d.ts       # Tipos de Vite
```

---

## Explicación de Cada Módulo

### 📦 components/

#### `common/` - Componentes Genéricos

**Button.tsx**
- **Función:** Botón reutilizable con diferentes variantes (primary, secondary, danger)
- **Props:** children, variant, fullWidth, isLoading, disabled
- **Uso:** En formularios, acciones, navegación
- **Razón:** Mantener consistencia visual en todos los botones de la app

**Input.tsx**
- **Función:** Campo de entrada genérico con manejo de errores
- **Props:** label, error, helperText, fullWidth, y todas las props de input HTML
- **Uso:** Formularios de login, consulta, etc.
- **Razón:** Estandarizar inputs con validaciones y feedback visual

**Loader.tsx**
- **Función:** Indicador de carga (spinner)
- **Props:** size (small/medium/large), text, fullScreen
- **Uso:** Durante peticiones HTTP, carga de datos
- **Razón:** Feedback visual al usuario durante procesos asíncronos

**ErrorMessage.tsx**
- **Función:** Mensaje de error con icono y opción de reintentar
- **Props:** message, onRetry
- **Uso:** Mostrar errores de validación o de servidor
- **Razón:** UX consistente para manejo de errores

#### `layout/` - Componentes de Estructura

**Header.tsx**
- **Función:** Encabezado con logo y título del colegio
- **Razón:** Branding consistente en todas las páginas

**Footer.tsx**
- **Función:** Pie de página con logos de universidades aliadas
- **Razón:** Mostrar convenios educativos según diseño de Figma

**Layout.tsx**
- **Función:** Contenedor principal que combina Header, contenido y Footer
- **Props:** children, mostrarHeader, mostrarFooter
- **Razón:** Evitar repetir estructura en cada página

#### `auth/` - Componentes de Autenticación

**PasswordInput.tsx**
- **Función:** Input especializado para contraseñas con botón de ojo
- **Características:**
  - Toggle para mostrar/ocultar contraseña
  - Icono de ojo que cambia según el estado
  - Validaciones y manejo de errores
- **Razón:** Requerimiento específico del diseño de Figma
- **Seguridad:** No guarda la contraseña en estado visible, solo cambia el tipo de input

**LoginForm.tsx**
- **Función:** Formulario completo de inicio de sesión
- **Características:**
  - Validación en tiempo real
  - Manejo de errores del servidor
  - Estado de carga
  - Integración con AuthContext
- **Razón:** Encapsular toda la lógica del login en un componente

---

### 📄 pages/

**Login.tsx**
- **Función:** Vista de inicio de sesión
- **Diseño:** Panel izquierdo (formulario) + Panel derecho (imagen)
- **Características:**
  - Botón para cambiar a Consulta
  - Responsive (oculta imagen en móvil)
  - Redirige al Dashboard después del login exitoso

**Consulta.tsx**
- **Función:** Vista pública de consulta de documentos
- **Diseño:** Panel izquierdo (búsqueda) + Panel derecho (resultados/imagen)
- **Características:**
  - Solo acepta números en el campo de identificación
  - Muestra loader durante búsqueda
  - Muestra "No existen documentos" si no hay resultados
  - Lista documentos con botón de descarga
  - No requiere autenticación (pública)

**Dashboard.tsx**
- **Función:** Panel administrativo (requiere autenticación)
- **Características:**
  - Muestra nombre y rol del usuario
  - Botón de cerrar sesión
  - Placeholders para módulos futuros
- **Futuro:** Se expandirá con módulos de gestión

**NotFound.tsx**
- **Función:** Página 404 para rutas inexistentes
- **Características:** Botones para volver al inicio o consulta

---

### 🔌 services/

**api.ts**
- **Función:** Configuración central de Axios
- **Características:**
  - BaseURL desde variables de entorno
  - Interceptor de request: Agrega token automáticamente
  - Interceptor de response: Maneja errores 401, 403, 500
  - Timeout de 10 segundos
- **Razón:** Centralizar configuración HTTP y manejo de errores

**authService.ts**
- **Funciones:**
  - `iniciarSesion(credenciales)`: Login y guarda token/usuario
  - `cerrarSesion()`: Limpia localStorage
  - `obtenerUsuarioActual()`: Recupera usuario del localStorage
  - `hayTokenValido()`: Verifica si existe token
  - `validarToken()`: Valida token con el servidor
- **Razón:** Encapsular toda la lógica de autenticación

**consultaService.ts**
- **Funciones:**
  - `buscarDocumentosPorIdentificacion(params)`: Busca documentos
  - `obtenerUrlDescargaDocumento(id)`: Obtiene URL de descarga
- **Razón:** Separar lógica de consulta del componente

---

### 🪝 hooks/

**useAuth.ts**
- **Función:** Hook para acceder al contexto de autenticación
- **Retorna:** usuario, estaAutenticado, cargando, establecerUsuario, cerrarSesion
- **Razón:** Facilitar acceso al estado de autenticación desde cualquier componente
- **Uso:** `const { usuario, estaAutenticado } = useAuth();`

**useConsulta.ts**
- **Función:** Hook para manejar búsqueda de documentos
- **Retorna:** cargando, documentos, error, buscarDocumentos, limpiarConsulta
- **Razón:** Encapsular lógica de estado y peticiones de consulta
- **Uso:** `const { buscarDocumentos, documentos } = useConsulta();`

---

### 🌐 context/

**AuthContext.tsx**
- **Función:** Proveedor de estado global de autenticación
- **Estado:** usuario, estaAutenticado, cargando
- **Métodos:** establecerUsuario, cerrarSesion
- **Razón:** Compartir estado de autenticación en toda la app sin prop drilling
- **Persistencia:** Carga usuario del localStorage al iniciar

---

### 📝 types/

**auth.types.ts**
- Tipos: CredencialesLogin, Usuario, RolUsuario, RespuestaAuth, EstadoAuth
- **Razón:** Type safety para todo lo relacionado con autenticación

**user.types.ts**
- Tipos: DatosUsuario, CrearUsuario, ActualizarUsuario
- **Razón:** Tipos para gestión de usuarios (futuro módulo)

**consulta.types.ts**
- Tipos: ParametrosConsulta, DocumentoPDF, RespuestaConsulta, EstadoConsulta
- **Razón:** Type safety para consultas de documentos

**index.ts**
- Exporta todos los tipos para importación fácil
- **Uso:** `import { Usuario, DocumentoPDF } from '@types';`

---

### 🛠️ utils/

**constants.ts**
- **Contenido:**
  - URLs de API
  - Claves de localStorage
  - Mensajes de error/éxito
  - Rutas de la aplicación
  - Roles de usuario
  - Reglas de validación
- **Razón:** Centralizar valores constantes, fácil mantenimiento

**validators.ts**
- **Funciones:**
  - `soloNumeros()`: Verifica que solo haya dígitos
  - `longitudMinima()`: Valida longitud mínima
  - `validarUsuario()`: Valida campo de usuario
  - `validarContrasena()`: Valida campo de contraseña
  - `validarIdentificacion()`: Valida número de documento
  - `sanitizarTexto()`: Previene XSS
- **Razón:** Centralizar lógica de validación, reutilizable

**helpers.ts**
- **Funciones:**
  - `formatearTamanioArchivo()`: Bytes a KB/MB/GB
  - `formatearFecha()`: Fechas en formato español
  - `descargarPDF()`: Descarga archivo
  - `copiarAlPortapapeles()`: Copia texto
  - `esperar()`: Delay asíncrono
  - `capitalizarPrimeraLetra()`: Capitaliza texto
  - `truncarTexto()`: Acorta texto largo
- **Razón:** Funciones auxiliares reutilizables

---

### 🛣️ routes/

**AppRoutes.tsx**
- **Función:** Define todas las rutas de la aplicación
- **Rutas públicas:** /, /login, /consulta
- **Rutas protegidas:** /dashboard
- **Razón:** Centralizar navegación

**ProtectedRoute.tsx**
- **Función:** Componente que protege rutas
- **Lógica:**
  - Si está cargando → Muestra loader
  - Si está autenticado → Muestra contenido (Outlet)
  - Si no está autenticado → Redirige a /login
- **Razón:** Seguridad, solo usuarios autenticados acceden al dashboard

---

## Flujo de Autenticación

1. Usuario ingresa credenciales en `LoginForm`
2. Se validan con `validators.ts`
3. Si son válidas, se envía petición con `authService.iniciarSesion()`
4. Backend responde con token y datos de usuario
5. Se guarda en localStorage
6. Se actualiza `AuthContext` con `establecerUsuario()`
7. `ProtectedRoute` detecta autenticación
8. Usuario es redirigido a `/dashboard`

### Persistencia:
- Al recargar página, `AuthContext` lee localStorage
- Si hay usuario guardado, lo carga automáticamente

### Cierre de sesión:
- Click en "Cerrar Sesión" en Dashboard
- Ejecuta `cerrarSesion()` de AuthContext
- Limpia localStorage
- Redirige a `/login`

---

## Flujo de Consulta

1. Usuario ingresa número de identificación
2. Se valida con `validarIdentificacion()`
3. Click en "Buscar" ejecuta `buscarDocumentos()` del hook `useConsulta`
4. Se muestra `<Loader>` mientras se busca
5. Backend responde con array de documentos
6. Se actualizan estados del hook
7. Componente renderiza resultados o mensaje "No existen documentos"
8. Usuario puede descargar documentos con botón

---

## Componentes Reutilizables

### ¿Por qué componentes reutilizables?

1. **Consistencia:** Mismo diseño en toda la app
2. **Mantenibilidad:** Cambio en un lugar afecta a toda la app
3. **Productividad:** No repetir código
4. **Testing:** Probar una vez, usar muchas veces

### Ejemplos de reutilización:

- **Button:** Login, Consulta, Dashboard, NotFound
- **Input:** Login (usuario), Consulta (identificación)
- **PasswordInput:** Solo Login, pero reutilizable si se necesita en otro lado
- **Loader:** Login (durante autenticación), Consulta (durante búsqueda)
- **ErrorMessage:** Login (error de credenciales), Consulta (error de búsqueda)

---

## Manejo de Estados

### Estado Local (useState):
- Formularios (valores de inputs)
- UI temporal (modales abiertos/cerrados)

### Estado Compartido (Context):
- Autenticación (usuario, token)
- Razón: Necesario en múltiples componentes

### Estado de Servidor (Hooks personalizados):
- useConsulta: Maneja estados de carga, datos y errores de consultas
- Razón: Separar lógica de UI

---

## Próximos Pasos de Desarrollo

### Módulos Futuros a Implementar:

1. **Gestión de Usuarios**
   - CRUD de usuarios
   - Asignación de roles
   
2. **Gestión de Documentos**
   - Subida de PDFs
   - Asignación a identificaciones
   - Edición/eliminación

3. **Reportes y Estadísticas**
   - Dashboard con gráficas
   - Exportación de datos

---

## Convenciones del Proyecto

### Nombres de Archivos:
- Componentes: PascalCase (Button.tsx, LoginForm.tsx)
- Utilidades: camelCase (validators.ts, helpers.ts)
- Tipos: camelCase con .types (auth.types.ts)

### Nombres de Variables:
- Componentes: PascalCase
- Funciones: camelCase
- Constantes: UPPER_SNAKE_CASE
- Variables de negocio: español (usuario, contraseña, identificación)
- Variables técnicas: inglés (loading, error, success)

### Imports:
- Usar alias de path (@components, @utils, etc.)
- Razón: Evitar rutas relativas largas (../../..)

---

¿Necesitas más detalles sobre algún módulo específico?
