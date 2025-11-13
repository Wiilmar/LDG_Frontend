/**
 * Página Consulta - Vista pública de consulta de documentos
 * 
 * Mantiene el mismo diseño del Login con tabs y formulario,
 * mostrando resultados sin cambiar la estructura visual.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Layout from '@components/layout/Layout';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Loader from '@components/common/Loader';
import ErrorMessage from '@components/common/ErrorMessage';
import { useConsulta } from '@hooks/useConsulta';
import { validarIdentificacion } from '@utils/validators';
import { formatearTamanioArchivo, formatearFecha, descargarPDF } from '@utils/helpers';
import { RUTAS } from '@utils/constants';

type TabType = 'login' | 'consulta';

const Consulta: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idFromUrl = searchParams.get('id') || '';
  
  const [tabActiva, setTabActiva] = useState<TabType>('consulta');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState(idFromUrl);
  const [errorValidacion, setErrorValidacion] = useState('');
  const { cargando, documentos, error, buscarDocumentos, limpiarConsulta } = useConsulta();
  const [consultaRealizada, setConsultaRealizada] = useState(false);

  // Realizar búsqueda automática si viene ID en la URL
  useEffect(() => {
    if (idFromUrl) {
      handleSubmit(new Event('submit') as any);
    }
  }, [idFromUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    
    // Siempre actualizar el valor del input (para permitir borrar)
    setNumeroIdentificacion(valor);
    
    // Validar solo si hay contenido
    if (valor === '') {
      setErrorValidacion('');
    } else if (!/^\d+$/.test(valor)) {
      setErrorValidacion('Solo se permiten números, sin puntos ni letras');
    } else {
      setErrorValidacion('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validacion = validarIdentificacion(numeroIdentificacion);
    if (!validacion.valido) {
      setErrorValidacion(validacion.mensaje || '');
      // No activar consultaRealizada si hay error de validación
      return;
    }
    
    setConsultaRealizada(true);
    await buscarDocumentos(numeroIdentificacion);
  };

  const handleNuevaConsulta = () => {
    setNumeroIdentificacion('');
    setErrorValidacion('');
    setConsultaRealizada(false);
    limpiarConsulta();
  };

  const handleDescargar = (url: string, nombre: string) => {
    descargarPDF(url, nombre);
  };

  const irALogin = () => {
    navigate(RUTAS.LOGIN);
  };

  return (
    <Layout>
      <div className="flex-1 flex">
        {/* Panel Izquierdo - Formulario (oculto en móvil cuando hay resultados) */}
        <div 
          className={`w-full lg:w-1/3 flex items-center justify-center p-8 ${consultaRealizada ? 'hidden lg:flex' : 'flex'}`}
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #AACAF5 100%)'
          }}
        >
          <div className="w-full max-w-md">
            {/* Logo y encabezado del colegio */}
            <div className="text-center mb-8">
              {/* Logo del Colegio */}
              <div className="mb-5">
                <img
                  src="/assets/images/logo-colegio.png"
                  alt="Logo Colegio León de Greiff"
                  className="h-44 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-auto mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Nombre del Colegio */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-normal mb-4" style={{ fontFamily: '"DM Serif Display", serif', color: '#1E4F90' }}>
                COLEGIO LEON DE GREIFF
              </h1>
              
              {/* Separador */}
              <div className="w-[95%] sm:w-[85%] max-w-md h-[2px] sm:h-[3px] mx-auto mb-4" style={{ backgroundColor: '#939393' }}></div>
              
              {/* Subtítulo */}
              <p className="text-2xl sm:text-2xl md:text-3xl mb-8" style={{ fontFamily: '"Agdasima", sans-serif', fontWeight: 400, color: '#305C98' }}>
                Sistema de gestión administrativo
              </p>
            </div>

            {/* Pestañas */}
            <div className="relative bg-white rounded-full p-1.5 shadow-md mb-0 z-10 w-[85%] sm:w-[80%] md:max-w-sm mx-auto">
              {/* Fondo deslizante */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-primary-700 transition-all duration-300 ease-in-out"
                style={{
                  width: 'calc(50% - 6px)',
                  left: tabActiva === 'login' ? '6px' : 'calc(50% + 0px)',
                }}
              />
              
              {/* Botones */}
              <div className="relative flex">
                <button
                  onClick={irALogin}
                  className={`flex-1 px-6 py-3 font-semibold rounded-full transition-colors duration-300 ${
                    tabActiva === 'login'
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => setTabActiva('consulta')}
                  className={`flex-1 px-6 py-3 font-semibold rounded-full transition-colors duration-300 ${
                    tabActiva === 'consulta'
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                >
                  Consultar
                </button>
              </div>
            </div>

            {/* Contenedor con fondo para formulario */}
            <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-3xl pt-10 px-6 sm:px-8 pb-4 sm:pb-6 shadow-lg -mt-6">
              {/* Formulario de búsqueda */}
              <div className="min-h-[350px]">
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ícono de búsqueda con usuario */}
                <div className="flex justify-center mb-6">
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img
                      src="/assets/images/icons/icono-busqueda.png"
                      alt="Ícono de búsqueda"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <Input
                  label="Identificación"
                  name="identificacion"
                  type="text"
                  value={numeroIdentificacion}
                  onChange={handleChange}
                  error={errorValidacion}
                  placeholder="Numero de identificación"
                  required
                  disabled={cargando}
                  maxLength={25}
                />

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={cargando}
                  >
                    Buscar
                  </Button>
                  {consultaRealizada && (
                    <Button
                      type="button"
                      variant="secondary"
                      fullWidth
                      onClick={handleNuevaConsulta}
                    >
                      Limpiar
                    </Button>
                  )}
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Derecho - Resultados o Imagen (visible solo en desktop o cuando no hay resultados en móvil) */}
        <div className={`${consultaRealizada ? 'w-full' : 'hidden'} lg:block lg:w-2/3 relative`}>
          {!consultaRealizada ? (
            // Mostrar imagen de fondo cuando no hay búsqueda
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(/assets/images/estudiantes-foto.png)',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              {/* Logos de universidades */}
              <div className="relative z-10 h-full flex items-end justify-center pb-6 px-4">
                <div className="bg-white bg-opacity-70 px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-5 rounded-lg shadow-lg w-full max-w-6xl">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                    <a 
                      href="https://usbcali.edu.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300 flex-shrink"
                    >
                      <img
                        src="/assets/images/universidades/san-buenaventura.png"
                        alt="Universidad de San Buenaventura"
                        className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                    </a>
                    <a 
                      href="https://www.javeriana.edu.co/inicio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300 flex-shrink"
                    >
                      <img
                        src="/assets/images/universidades/javeriana.png"
                        alt="Pontificia Universidad Javeriana"
                        className="h-8 sm:h-10 md:h-11 lg:h-13 xl:h-16 max-h-8 sm:max-h-10 md:max-h-11 lg:max-h-13 xl:max-h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                    </a>
                    <a 
                      href="https://www.icesi.edu.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300 flex-shrink"
                    >
                      <img
                        src="/assets/images/universidades/icesi.png"
                        alt="Universidad ICESI"
                        className="h-7 sm:h-8 md:h-9 lg:h-11 xl:h-14 max-h-7 sm:max-h-8 md:max-h-9 lg:max-h-11 xl:max-h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                    </a>
                    <img
                      src="/assets/images/universidades/otra.png"
                      alt="Universidad"
                      className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 transform hover:scale-110 transition-transform duration-300 flex-shrink"
                      onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Mostrar resultados con fondo blanco
            <div 
              className="absolute inset-0 overflow-y-auto"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #AACAF5 100%)'
              }}
            >
              <div className="p-8 min-h-full">
                {/* Botón de regresar (solo visible en móvil) */}
                <div className="lg:hidden mb-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleNuevaConsulta}
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Regresar
                  </Button>
                </div>

                {cargando && (
                  <div className="h-full flex items-center justify-center">
                    <Loader size="large" text="Buscando documentos..." />
                  </div>
                )}

                {!cargando && error && (
                  <div className="h-full flex items-center justify-center p-8">
                    <div className="max-w-md w-full">
                      <ErrorMessage message={error} onRetry={handleNuevaConsulta} />
                    </div>
                  </div>
                )}

                {!cargando && !error && documentos.length === 0 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                      <svg
                        className="mx-auto h-24 w-24 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h3 className="mt-4 text-xl font-semibold text-gray-900">
                        No existen documentos
                      </h3>
                      <p className="mt-2 text-gray-500">
                        No se encontraron documentos asociados al número de identificación ingresado.
                      </p>
                    </div>
                  </div>
                )}

                {!cargando && !error && documentos.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Documentos Encontrados ({documentos.length})
                    </h3>
                    <div className="space-y-4">
                      {documentos.map((doc) => (
                        <div
                          key={doc.id}
                          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {doc.nombre}
                              </h4>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p>Tamaño: {formatearTamanioArchivo(doc.tamanio)}</p>
                                <p>Fecha: {formatearFecha(doc.fechaCreacion)}</p>
                              </div>
                            </div>
                            <Button
                              variant="primary"
                              onClick={() => handleDescargar(doc.url, doc.nombre)}
                              className="ml-4"
                            >
                              <FaDownload className="inline mr-2" />
                              Descargar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Consulta;
