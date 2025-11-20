/**
 * Componente ProtectedRoute - Rutas protegidas por autenticación
 * Este componente protege las rutas que requieren autenticación.
 * Redirige al login si el usuario no está autenticado.
 */

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { RUTAS } from '@utils/constants';
import Loader from '@components/common/Loader';

const ProtectedRoute: React.FC = () => {
  const { estaAutenticado, cargando } = useAuth();

  if (cargando) {
    return <Loader fullScreen size="large" text="Verificando autenticación..." />;
  }

  return estaAutenticado ? <Outlet /> : <Navigate to={RUTAS.LOGIN} replace />;
};

export default ProtectedRoute;
