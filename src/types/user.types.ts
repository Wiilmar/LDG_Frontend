/**
 * Tipos relacionados con usuarios del sistema
 */

import { RolUsuario, Genero } from './auth.types';

export interface DatosUsuario {
  id: string;
  usuario: string;
  nombre: string;
  rol: RolUsuario;
  genero?: Genero;
  activo: boolean;
  fechaCreacion: Date;
  ultimoAcceso?: Date;
}

export interface CrearUsuario {
  usuario: string;
  contrasena: string;
  nombre: string;
  rol: RolUsuario;
  genero?: Genero;
}

export interface ActualizarUsuario {
  nombre?: string;
  rol?: RolUsuario;
  genero?: Genero;
  activo?: boolean;
}
