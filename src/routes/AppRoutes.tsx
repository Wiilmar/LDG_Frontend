/**
 * AppRoutes - Configuración de rutas de la aplicación
 * Define todas las rutas públicas y protegidas de la aplicación.
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { RUTAS } from '@utils/constants';

// Páginas
import Login from '@pages/Login';
import Consulta from '@pages/Consulta';
import Dashboard from '@pages/Dashboard';
import Certificado from '@pages/Certificado';
import Mantenimiento from '@pages/Mantenimiento';
import NotFound from '@pages/NotFound';

// Componentes de rutas
import ProtectedRoute from './ProtectedRoute';
import Loader from '@components/common/Loader';

const AppRoutes: React.FC = () => {
  const { estaAutenticado, cargando } = useAuth();

  // Mostrar loader mientras verifica la sesión
  if (cargando) {
    return <Loader fullScreen size="large" text="Cargando..." />;
  }

  return (
    <Routes>
      {/* Ruta raíz - redirige a dashboard si está autenticado, o a login si no */}
      <Route 
        path={RUTAS.INICIO} 
        element={<Navigate to={estaAutenticado ? RUTAS.DASHBOARD : RUTAS.LOGIN} replace />} 
      />
      
      {/* Rutas públicas */}
      <Route path={RUTAS.LOGIN} element={<Login />} />
      <Route path={RUTAS.CONSULTA} element={<Consulta />} />
      
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path={RUTAS.DASHBOARD} element={<Dashboard />} />
        <Route path={RUTAS.CERTIFICADO} element={<Certificado />} />
        <Route path={RUTAS.MANTENIMIENTO} element={<Mantenimiento />} />
      </Route>
      
      {/* Ruta 404 */}
      <Route path={RUTAS.NO_ENCONTRADO} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
