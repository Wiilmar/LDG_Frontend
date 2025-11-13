/**
 * App.tsx - Componente principal de la aplicación
 * 
 * Configura el router y el contexto de autenticación.
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@context/AuthContext';
import AppRoutes from '@routes/AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
