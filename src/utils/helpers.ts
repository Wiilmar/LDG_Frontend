/**
 * Funciones auxiliares del proyecto
 */

/**
 * Formatea el tamaño de un archivo en bytes a una cadena legible
 */
export const formatearTamanioArchivo = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const tamaños = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + tamaños[i];
};

/**
 * Formatea una fecha a formato legible en español
 */
export const formatearFecha = (fecha: Date | string): string => {
  const fechaObj = typeof fecha === 'string' ? new Date(fecha) : fecha;
  
  return fechaObj.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Descarga un archivo PDF desde una URL
 */
export const descargarPDF = (url: string, nombreArchivo: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.download = nombreArchivo;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Copia texto al portapapeles
 */
export const copiarAlPortapapeles = async (texto: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (error) {
    console.error('Error al copiar al portapapeles:', error);
    return false;
  }
};

/**
 * Genera un delay/espera asíncrona
 */
export const esperar = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Capitaliza la primera letra de una cadena
 */
export const capitalizarPrimeraLetra = (texto: string): string => {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};

/**
 * Trunca un texto si excede la longitud máxima
 */
export const truncarTexto = (texto: string, longitudMaxima: number): string => {
  if (texto.length <= longitudMaxima) return texto;
  return texto.substring(0, longitudMaxima) + '...';
};
