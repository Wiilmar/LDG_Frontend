/**
 * Hook personalizado para manejar la consulta de documentos
 */

import { useState } from 'react';
import { EstadoConsulta, DocumentoPDF } from '@types/consulta.types';
import { buscarDocumentosPorIdentificacion } from '@services/consultaService';
import { MENSAJES_ERROR } from '@utils/constants';

export const useConsulta = () => {
  const [estado, setEstado] = useState<EstadoConsulta>({
    cargando: false,
    documentos: [],
    error: null,
  });

  const buscarDocumentos = async (numeroIdentificacion: string): Promise<void> => {
    setEstado({ cargando: true, documentos: [], error: null });

    try {
      const respuesta = await buscarDocumentosPorIdentificacion({ numeroIdentificacion });

      if (respuesta.success) {
        setEstado({
          cargando: false,
          documentos: respuesta.documentos,
          error: null,
        });
      } else {
        setEstado({
          cargando: false,
          documentos: [],
          error: respuesta.mensaje || 'No se encontraron documentos',
        });
      }
    } catch (error) {
      setEstado({
        cargando: false,
        documentos: [],
        error: MENSAJES_ERROR.ERROR_SERVIDOR,
      });
    }
  };

  const limpiarConsulta = () => {
    setEstado({
      cargando: false,
      documentos: [],
      error: null,
    });
  };

  return {
    ...estado,
    buscarDocumentos,
    limpiarConsulta,
  };
};
