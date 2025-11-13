/**
 * Tipos relacionados con la consulta pública de documentos
 */

export interface ParametrosConsulta {
  numeroIdentificacion: string;
}

export interface DocumentoPDF {
  id: string;
  nombre: string;
  url: string;
  fechaCreacion: Date;
  tamanio: number; // en bytes
}

export interface RespuestaConsulta {
  success: boolean;
  mensaje: string;
  documentos: DocumentoPDF[];
}

export interface EstadoConsulta {
  cargando: boolean;
  documentos: DocumentoPDF[];
  error: string | null;
}
