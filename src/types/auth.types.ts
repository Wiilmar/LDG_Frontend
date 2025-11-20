/**
 * Tipos relacionados con la autenticación de usuarios
 */

export interface CredencialesLogin {
  usuario: string;
  contrasena: string;
}

export interface Usuario {
  id: string;
  usuario: string;
  nombre: string;
  rol: RolUsuario;
  genero?: Genero;
  token?: string;
}

export type RolUsuario = 'administrador' | 'docente';

export type Genero = 'masculino' | 'femenino';

export interface RespuestaAuth {
  success: boolean;
  mensaje: string;
  usuario?: Usuario;
  token?: string;
}

export interface EstadoAuth {
  usuario: Usuario | null;
  estaAutenticado: boolean;
  cargando: boolean;
}
