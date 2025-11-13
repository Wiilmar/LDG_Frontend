/**
 * AppRoutes - Configuración de rutas de la aplicación
 * 
 * Define todas las rutas públicas y protegidas de la aplicación.
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RUTAS } from '@utils/constants';

// Páginas
import Login from '@pages/Login';
import Consulta from '@pages/Consulta';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/NotFound';

// Componentes de rutas
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Ruta raíz - redirige a login */}
      <Route path={RUTAS.INICIO} element={<Navigate to={RUTAS.LOGIN} replace />} />
      
      {/* Rutas públicas */}
      <Route path={RUTAS.LOGIN} element={<Login />} />
      <Route path={RUTAS.CONSULTA} element={<Consulta />} />
      
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path={RUTAS.DASHBOARD} element={<Dashboard />} />
      </Route>
      
      {/* Ruta 404 */}
      <Route path={RUTAS.NO_ENCONTRADO} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
