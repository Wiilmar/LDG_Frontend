/**
 * Página Mantenimiento
 * Funcionalidad para gestión de mantenimiento
 */

import React from 'react';
import Sidebar from '@components/layout/Sidebar';

const Mantenimiento: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#B5D5FF] via-[#B5D5FF] to-[#E0EDFF]">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mantenimiento</h1>
          <p className="text-gray-600">
            Funcionalidad de mantenimiento en desarrollo...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Mantenimiento;
