/**
 * Página Dashboard - Panel de administración
 * 
 * Vista principal después del login. Será expandida en futuras iteraciones
 * con los módulos administrativos solicitados.
 */

import React from 'react';
import { useAuth } from '@hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Button from '@components/common/Button';
import { RUTAS } from '@utils/constants';

const Dashboard: React.FC = () => {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate(RUTAS.LOGIN);
  };

  return (
    <Layout>
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header del Dashboard */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Panel de Administración
                </h1>
                <p className="text-gray-600 mt-2">
                  Bienvenido, <span className="font-semibold">{usuario?.nombre}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Rol: <span className="capitalize">{usuario?.rol}</span>
                </p>
              </div>
              <Button variant="danger" onClick={handleCerrarSesion}>
                Cerrar Sesión
              </Button>
            </div>
          </div>

          {/* Contenido del Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para futuros módulos */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Gestión de Usuarios
              </h3>
              <p className="text-gray-600 text-sm">
                Administra los usuarios del sistema
              </p>
              <p className="text-xs text-gray-400 mt-4">Próximamente...</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Documentos
              </h3>
              <p className="text-gray-600 text-sm">
                Gestiona los documentos PDF
              </p>
              <p className="text-xs text-gray-400 mt-4">Próximamente...</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reportes
              </h3>
              <p className="text-gray-600 text-sm">
                Genera reportes y estadísticas
              </p>
              <p className="text-xs text-gray-400 mt-4">Próximamente...</p>
            </div>
          </div>

          {/* Mensaje informativo */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              🚀 Sistema en Desarrollo
            </h4>
            <p className="text-blue-800">
              Los módulos administrativos adicionales se implementarán en las próximas iteraciones
              según las especificaciones que proporciones.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
