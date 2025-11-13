/**
 * Página Login - Vista de inicio de sesión
 * 
 * Esta página muestra el formulario de login en el lado izquierdo
 * y la imagen de los estudiantes en el lado derecho, según el diseño de Figma.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import LoginForm from '@components/auth/LoginForm';
import ConsultaForm from '@components/auth/ConsultaForm';
import { RUTAS } from '@utils/constants';

type TabType = 'login' | 'consulta';

const Login: React.FC = () => {
  const [tabActiva, setTabActiva] = useState<TabType>('login');

  return (
    <Layout>
      <div className="flex-1 flex">
        {/* Panel Izquierdo - Formulario de Login */}
        <div 
          className="w-full lg:w-1/3 flex items-center justify-center p-8"
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
                  onClick={() => setTabActiva('login')}
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
              {/* Renderizar el formulario según la pestaña activa */}
              <div className="min-h-[350px]">
                {tabActiva === 'login' ? <LoginForm /> : <ConsultaForm />}
              </div>
            </div>
          </div>
        </div>

        {/* Panel Derecho - Imagen */}
        <div className="hidden lg:block lg:w-2/3 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/assets/images/estudiantes-foto.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            {/* Overlay oscuro para mejor legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          
          {/* Logos de universidades */}
          <div className="relative z-10 h-full flex items-end justify-center pb-6 px-4">
            <div className="bg-white bg-opacity-70 px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-5 rounded-lg shadow-lg w-full max-w-6xl">
              {/* Todos los logos en una sola fila */}
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
        </div>
      </div>
    </Layout>
  );
};

export default Login;
