/**
 * Configuración base de Axios para peticiones HTTP
 */

import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_URL, TOKEN_STORAGE_KEY, MENSAJES_ERROR } from '@utils/constants';

/**
 * Instancia de Axios configurada
 */
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor para agregar el token a cada petición
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor para manejar errores de respuesta
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // El servidor respondió con un código de error
      switch (error.response.status) {
        case 401:
          // Token expirado o inválido
          localStorage.removeItem(TOKEN_STORAGE_KEY);
          window.location.href = '/login';
          return Promise.reject(new Error(MENSAJES_ERROR.SESION_EXPIRADA));
        
        case 403:
          return Promise.reject(new Error(MENSAJES_ERROR.NO_AUTORIZADO));
        
        case 500:
          return Promise.reject(new Error(MENSAJES_ERROR.ERROR_SERVIDOR));
        
        default:
          return Promise.reject(error);
      }
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      return Promise.reject(new Error(MENSAJES_ERROR.ERROR_CONEXION));
    }
    
    return Promise.reject(error);
  }
);

export default api;
