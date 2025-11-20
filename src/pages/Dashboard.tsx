/**
 * Página Dashboard - Panel de administración
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import Sidebar from '@components/layout/Sidebar';
import { RUTAS } from '@utils/constants';

const Dashboard: React.FC = () => {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#B5D5FF] via-[#B5D5FF] to-[#E0EDFF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto lg:ml-0">
        <div className="max-w-6xl mx-auto space-y-6 pt-16 lg:pt-0">{/* pt-16 para dar espacio al botón hamburguesa en móvil */}
          
          {/* Card de Bienvenida */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold text-[#93ACCC] mb-3">
              ¡Bienvenido, {usuario?.nombre || 'usuario'}!
            </h1>
            <p className="text-gray-700 leading-relaxed">
              El sistema de gestión tiene como propósito optimizar y fortalecer las actividades asociadas a los
              procesos administrativos, garantizando una mayor eficiencia, organización y control.
            </p>
          </div>

          {/* Grid de Cards de Funcionalidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card Certificados */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              {/* Espacio para icono */}
              <div className="w-24 h-24 mb-4 bg-gradient-to-br from-[#93ACCC]/20 to-[#93ACCC]/10 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-[#93ACCC]/30 rounded" data-icon="icon-certificado"></div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 mb-3">CERTIFICADOS</h2>
              
              <p className="text-gray-700 text-sm mb-6 flex-1">
                Facilita la emisión de certificaciones laborales, garantizando un proceso más ágil, accesible y eficiente.
              </p>
              
              <button
                onClick={() => navigate(RUTAS.CERTIFICADO)}
                className="w-full bg-[#93ACCC] hover:bg-[#7a92b3] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Certificaciones
              </button>
            </div>

            {/* Card Actualización */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              {/* Espacio para icono */}
              <div className="w-24 h-24 mb-4 bg-gradient-to-br from-[#93ACCC]/20 to-[#93ACCC]/10 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-[#93ACCC]/30 rounded" data-icon="icon-actualizacion"></div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 mb-3">ACTUALIZACIÓN</h2>
              
              <p className="text-gray-700 text-sm mb-6 flex-1">
                A medida que el aplicativo evolucione, se integrarán nuevas funcionalidades para mejorar la experiencia del usuario.
              </p>
              
              <button
                onClick={() => navigate(RUTAS.DASHBOARD)}
                className="w-full bg-[#93ACCC] hover:bg-[#7a92b3] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Ver más
              </button>
            </div>

          </div>

          {/* Footer / Derechos de Autor */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-[#93ACCC] text-sm font-medium">
              © 2025 Colegio León de Greiff. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
