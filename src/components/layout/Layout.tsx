/**
 * Componente Layout - Estructura general de la aplicación
 * Proporciona la estructura base con contenido y footer.
 */

import React, { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  mostrarFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  mostrarFooter = false 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      
      {mostrarFooter && <Footer />}
    </div>
  );
};

export default Layout;
