/**
 * Tipos relacionados con usuarios del sistema
 */

import { RolUsuario } from './auth.types';

export interface DatosUsuario {
  id: string;
  usuario: string;
  nombre: string;
  rol: RolUsuario;
  activo: boolean;
  fechaCreacion: Date;
  ultimoAcceso?: Date;
}

export interface CrearUsuario {
  usuario: string;
  contrasena: string;
  nombre: string;
  rol: RolUsuario;
}

export interface ActualizarUsuario {
  nombre?: string;
  rol?: RolUsuario;
  activo?: boolean;
}
