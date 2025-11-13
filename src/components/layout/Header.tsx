/**
 * Componente Header - Encabezado de la aplicación
 * 
 * Muestra el logo del colegio y el título de la aplicación.
 */

import React from 'react';
import { APP_NAME } from '@utils/constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header vacío - contenido removido */}
      </div>
    </header>
  );
};

export default Header;
