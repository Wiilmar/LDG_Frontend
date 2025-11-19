/**
 * Componente Sidebar - Barra lateral de navegación del Dashboard
 */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { RUTAS } from '@utils/constants';

interface NavItem {
  label: string;
  ruta: string;
  iconPlaceholder: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', ruta: RUTAS.DASHBOARD, iconPlaceholder: 'icon-inicio' },
  { label: 'Certificado', ruta: RUTAS.CERTIFICADO, iconPlaceholder: 'icon-certificado' },
  { label: 'Mantenimiento', ruta: RUTAS.MANTENIMIENTO, iconPlaceholder: 'icon-mantenimiento' },
];

const Sidebar: React.FC = () => {
  const { usuario, cerrarSesion } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    cerrarSesion();
    navigate(RUTAS.LOGIN);
  };

  const isActive = (ruta: string) => {
    return location.pathname === ruta;
  };

  const getRolLabel = (rol: string) => {
    return rol === 'administrador' ? 'ADMINISTRADOR' : rol === 'docente' ? 'DOCENTE' : rol.toUpperCase();
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón de menú hamburguesa (solo visible en móvil) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#1E4F91] text-white p-3 rounded-lg shadow-lg hover:bg-[#00214D] transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay para cerrar el menú en móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-[#1E4F91] text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header - Usuario y Rol */}
        <div className="p-6 text-center border-b border-white/20">
          {/* Espacio para imagen de usuario */}
          <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
            {/* Placeholder para la imagen del usuario */}
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Rol del usuario */}
          <div className="text-sm font-semibold tracking-wider">
            {usuario?.rol ? getRolLabel(usuario.rol) : 'USUARIO'}
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-white/30 mx-4"></div>

        {/* Navegación */}
        <nav className="flex-1 py-6 px-4">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.ruta}>
                <Link
                  to={item.ruta}
                  onClick={closeSidebar}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 font-medium
                    ${isActive(item.ruta)
                      ? 'bg-[#00214D] text-white shadow-lg'
                      : 'bg-[#1E4F91] text-white hover:bg-white hover:text-[#1E4F91]'
                    }
                  `}
                >
                  {/* Placeholder para icono */}
                  <div className="w-6 h-6 bg-white/20 rounded flex-shrink-0" data-icon={item.iconPlaceholder}></div>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón Cerrar Sesión */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="
              w-full flex items-center gap-3 px-4 py-3 rounded-lg
              bg-[#212D3C] text-white hover:bg-[#2a3846] 
              transition-all duration-200 font-medium
              shadow-md hover:shadow-lg
            "
          >
            {/* Placeholder para icono de logout */}
            <div className="w-6 h-6 bg-white/20 rounded flex-shrink-0" data-icon="icon-logout"></div>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
