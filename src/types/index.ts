/**
 * Tipos globales y compartidos
 */

export interface RespuestaAPI<T = any> {
  success: boolean;
  mensaje: string;
  data?: T;
  error?: string;
}

export interface ErrorAPI {
  mensaje: string;
  codigo?: string;
  detalles?: any;
}

// Re-exportar todos los tipos para fácil importación
export * from './auth.types';
export * from './user.types';
export * from './consulta.types';
