/**
 * Funciones de validación personalizadas
 */

import { VALIDACIONES } from './constants';

/**
 * Valida que un campo solo contenga números
 */
export const soloNumeros = (valor: string): boolean => {
  return /^\d+$/.test(valor);
};

/**
 * Valida la longitud mínima de un campo
 */
export const longitudMinima = (valor: string, minimo: number): boolean => {
  return valor.length >= minimo;
};

/**
 * Valida que el usuario tenga el formato correcto
 */
export const validarUsuario = (usuario: string): { valido: boolean; mensaje?: string } => {
  if (!usuario || usuario.trim() === '') {
    return { valido: false, mensaje: 'El usuario es requerido' };
  }
  
  if (usuario.length < VALIDACIONES.MIN_LONGITUD_USUARIO) {
    return { 
      valido: false, 
      mensaje: `El usuario debe tener al menos ${VALIDACIONES.MIN_LONGITUD_USUARIO} caracteres` 
    };
  }
  
  return { valido: true };
};

/**
 * Valida que la contraseña tenga el formato correcto
 */
export const validarContrasena = (contrasena: string): { valido: boolean; mensaje?: string } => {
  if (!contrasena || contrasena.trim() === '') {
    return { valido: false, mensaje: 'La contraseña es requerida' };
  }
  
  if (contrasena.length < VALIDACIONES.MIN_LONGITUD_CONTRASENA) {
    return { 
      valido: false, 
      mensaje: `La contraseña debe tener al menos ${VALIDACIONES.MIN_LONGITUD_CONTRASENA} caracteres` 
    };
  }
  
  return { valido: true };
};

/**
 * Valida que el número de identificación tenga el formato correcto
 */
export const validarIdentificacion = (identificacion: string): { valido: boolean; mensaje?: string } => {
  if (!identificacion || identificacion.trim() === '') {
    return { valido: false, mensaje: 'El número de identificación es requerido' };
  }
  
  if (!soloNumeros(identificacion)) {
    return { valido: false, mensaje: 'El número de identificación solo debe contener números' };
  }
  
  if (identificacion.length < VALIDACIONES.MIN_LONGITUD_IDENTIFICACION) {
    return { 
      valido: false, 
      mensaje: `El número de identificación debe tener al menos ${VALIDACIONES.MIN_LONGITUD_IDENTIFICACION} dígitos` 
    };
  }
  
  if (identificacion.length > VALIDACIONES.MAX_LONGITUD_IDENTIFICACION) {
    return { 
      valido: false, 
      mensaje: `El número de identificación no puede tener más de ${VALIDACIONES.MAX_LONGITUD_IDENTIFICACION} dígitos` 
    };
  }
  
  return { valido: true };
};

/**
 * Sanitiza una cadena de texto para prevenir XSS
 */
export const sanitizarTexto = (texto: string): string => {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
};
