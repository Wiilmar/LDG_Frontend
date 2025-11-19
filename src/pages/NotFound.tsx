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
      <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Fondo con patrón del logo como marca de agua */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/assets/images/logo-colegio.webp)',
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            transform: 'rotate(-15deg) scale(1.5)',
          }}
        />
        
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30" />
        
        <div className="text-center max-w-md animate-fade-in relative z-10">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 animate-bounce-subtle">ERROR 404</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in-up animation-delay-300">
            Página no encontrada
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-8 px-4 animate-fade-in-up animation-delay-400">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          
          <div className="space-y-4 animate-fade-in-up animation-delay-500">
            <Link to={RUTAS.INICIO}>
              <Button variant="primary" fullWidth>
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
