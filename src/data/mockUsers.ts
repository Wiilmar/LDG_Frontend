/**
 * Usuarios mock para autenticación temporal
 * Este archivo será reemplazado cuando se implemente el backend
 */

import { Usuario } from '../types/auth.types';

export interface MockUser {
  usuario: string;
  contrasena: string;
  datos: Usuario;
}

export const MOCK_USERS: MockUser[] = [
  {
    usuario: 'wilman',
    contrasena: 'wilman2025',
    datos: {
      id: '1',
      usuario: 'wilman',
      nombre: 'Wilman',
      rol: 'administrador',
      genero: 'masculino',
    }
  },
  {
    usuario: 'wiliam',
    contrasena: 'wiliam2025',
    datos: {
      id: '2',
      usuario: 'wiliam',
      nombre: 'Wiliam',
      rol: 'docente',
      genero: 'masculino',
    }
  },
  {
    usuario: 'sandra',
    contrasena: 'sandra2025',
    datos: {
      id: '3',
      usuario: 'sandra',
      nombre: 'Sandra',
      rol: 'administrador',
      genero: 'femenino',
    }
  }
];

/**
 * Valida las credenciales con los datos de los usuarios mock
 */
export const validarCredencialesMock = (usuario: string, contrasena: string): MockUser | null => {
  const usuarioEncontrado = MOCK_USERS.find(
    u => u.usuario === usuario && u.contrasena === contrasena
  );
  return usuarioEncontrado || null;
};
