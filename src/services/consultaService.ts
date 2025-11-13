/**
 * Servicios relacionados con la consulta pública de documentos
 */

import api from './api';
import { ParametrosConsulta, RespuestaConsulta } from '@types/consulta.types';

/**
 * Servicio para buscar documentos por número de identificación
 */
export const buscarDocumentosPorIdentificacion = async (
  parametros: ParametrosConsulta
): Promise<RespuestaConsulta> => {
  try {
    const response = await api.get<RespuestaConsulta>(
      `/consulta/documentos/${parametros.numeroIdentificacion}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Servicio para obtener la URL de descarga de un documento
 */
export const obtenerUrlDescargaDocumento = async (idDocumento: string): Promise<string> => {
  try {
    const response = await api.get<{ url: string }>(`/consulta/documento/${idDocumento}/descargar`);
    return response.data.url;
  } catch (error) {
    throw error;
  }
};
