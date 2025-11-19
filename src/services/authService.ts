/**
 * Servicios relacionados con autenticación
 */

import api from './api';
import { CredencialesLogin, RespuestaAuth, Usuario } from '../types/auth.types';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@utils/constants';

/**
 * Servicio para iniciar sesión
 */
export const iniciarSesion = async (credenciales: CredencialesLogin): Promise<RespuestaAuth> => {
  try {
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
