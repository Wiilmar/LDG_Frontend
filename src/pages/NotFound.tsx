/**
 * Página NotFound - Error 404
 * 
 * Página mostrada cuando el usuario intenta acceder a una ruta que no existe.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Button from '@components/common/Button';
import { RUTAS } from '@utils/constants';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600">404</h1>
            <div className="text-6xl mb-4">🔍</div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Página no encontrada
          </h2>
          
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          
          <div className="space-y-4">
            <Link to={RUTAS.INICIO}>
              <Button variant="primary" fullWidth>
                Volver al Inicio
              </Button>
            </Link>
            
            <Link to={RUTAS.CONSULTA}>
              <Button variant="secondary" fullWidth>
                Ir a Consulta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
