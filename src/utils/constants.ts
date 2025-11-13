/**
 * Constantes globales del proyecto
 */

// URL base de la API (viene de las variables de entorno)
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Nombre de la aplicación
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Colegio León de Greiff';

// Clave para el almacenamiento local del token
export const TOKEN_STORAGE_KEY = 'ldg_auth_token';

// Clave para el almacenamiento local del usuario
export const USER_STORAGE_KEY = 'ldg_user_data';

// Mensajes de error comunes
export const MENSAJES_ERROR = {
  SESION_EXPIRADA: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
  CREDENCIALES_INVALIDAS: 'Usuario o contraseña incorrectos.',
  ERROR_CONEXION: 'Error de conexión. Por favor, verifica tu internet.',
  ERROR_SERVIDOR: 'Error en el servidor. Intenta nuevamente más tarde.',
  CAMPOS_REQUERIDOS: 'Por favor, completa todos los campos requeridos.',
  FORMATO_INVALIDO: 'El formato ingresado no es válido.',
  NO_AUTORIZADO: 'No tienes permisos para realizar esta acción.',
};

// Mensajes de éxito
export const MENSAJES_EXITO = {
  LOGIN_EXITOSO: 'Inicio de sesión exitoso.',
  DOCUMENTOS_ENCONTRADOS: 'Documentos encontrados.',
  DESCARGA_EXITOSA: 'Documento descargado exitosamente.',
};

// Rutas de la aplicación
export const RUTAS = {
  LOGIN: '/login',
  CONSULTA: '/consulta',
  DASHBOARD: '/dashboard',
  INICIO: '/',
  NO_ENCONTRADO: '*',
};

// Roles de usuario
export const ROLES = {
  ADMINISTRADOR: 'administrador',
  PROFESOR: 'profesor',
  MANTENIMIENTO: 'mantenimiento',
} as const;

// Validaciones
export const VALIDACIONES = {
  MIN_LONGITUD_USUARIO: 4,
  MIN_LONGITUD_CONTRASENA: 4,
  MIN_LONGITUD_IDENTIFICACION: 5,
  MAX_LONGITUD_IDENTIFICACION: 15,
};
