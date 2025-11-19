/**
 * Contexto de autenticación global
 */

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Usuario, EstadoAuth } from '../types/auth.types';
import { obtenerUsuarioActual, cerrarSesion as cerrarSesionService } from '@services/authService';

interface AuthContextType extends EstadoAuth {
  establecerUsuario: (usuario: Usuario | null) => void;
  cerrarSesion: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Cargar usuario del localStorage al iniciar
    const usuarioGuardado = obtenerUsuarioActual();
    const tokenGuardado = localStorage.getItem('ldg_auth_token');
    
    // Solo restaurar sesión si hay usuario Y token
    if (usuarioGuardado && tokenGuardado) {
      setUsuario(usuarioGuardado);
    } else {
      // Si falta alguno, limpiar todo
      cerrarSesionService();
    }
    setCargando(false);
  }, []);

  const establecerUsuario = (nuevoUsuario: Usuario | null) => {
    setUsuario(nuevoUsuario);
  };

  const cerrarSesion = () => {
    cerrarSesionService();
    setUsuario(null);
  };

  const value: AuthContextType = {
    usuario,
    estaAutenticado: !!usuario,
    cargando,
    establecerUsuario,
    cerrarSesion,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
