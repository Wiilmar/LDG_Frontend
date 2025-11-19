/**
 * Servicios relacionados con autenticación
 */

import api from './api';
import { CredencialesLogin, RespuestaAuth, Usuario } from '../types/auth.types';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@utils/constants';
import { validarCredencialesMock } from '../data/mockUsers';

// Flag para usar autenticación mock (cambiar a false cuando se conecte al backend)
const USE_MOCK_AUTH = true;

/**
 * Servicio para iniciar sesión
 */
export const iniciarSesion = async (credenciales: CredencialesLogin): Promise<RespuestaAuth> => {
  try {
    // Autenticación temporal con usuarios mock
    if (USE_MOCK_AUTH) {
      const usuarioMock = validarCredencialesMock(credenciales.usuario, credenciales.contrasena);
      
      if (usuarioMock) {
        const token = `mock-token-${usuarioMock.datos.id}-${Date.now()}`;
        const respuesta: RespuestaAuth = {
          success: true,
          mensaje: 'Inicio de sesión exitoso',
          usuario: usuarioMock.datos,
          token: token
        };
        
        // Guardar token y usuario en localStorage
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(usuarioMock.datos));
        
        return respuesta;
      } else {
        return {
          success: false,
          mensaje: 'Usuario o contraseña incorrectos'
        };
      }
    }
    
    // Autenticación real con backend
    const response = await api.post<RespuestaAuth>('/auth/login', credenciales);
    
    // Guardar token y usuario en localStorage
    if (response.data.success && response.data.token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, response.data.token);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.data.usuario));
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Servicio para cerrar sesión
 */
export const cerrarSesion = (): void => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
};

/**
 * Servicio para obtener el usuario actual del localStorage
 */
export const obtenerUsuarioActual = (): Usuario | null => {
  try {
    const usuarioGuardado = localStorage.getItem(USER_STORAGE_KEY);
    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado);
    }
    return null;
  } catch (error) {
    console.error('Error al obtener usuario del localStorage:', error);
    return null;
  }
};

/**
 * Servicio para verificar si hay un token válido
 */
export const hayTokenValido = (): boolean => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  return !!token;
};

/**
 * Servicio para validar el token actual con el servidor
 */
export const validarToken = async (): Promise<boolean> => {
  try {
    const response = await api.get('/auth/validar-token');
    return response.data.success;
  } catch (error) {
    return false;
  }
};
