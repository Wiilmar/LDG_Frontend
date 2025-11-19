/**
 * Componente ConsultaForm - Formulario de consulta de documentos
 * 
 * Permite buscar documentos por identificación
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RUTAS } from '@utils/constants';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import OptimizedImage from '@components/common/OptimizedImage';

const ConsultaForm: React.FC = () => {
  const navigate = useNavigate();
  const [identificacion, setIdentificacion] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identificacion.trim()) {
      return;
    }
    
    setCargando(true);
    
    // Simular búsqueda y redirigir a la página de consulta
    setTimeout(() => {
      navigate(`${RUTAS.CONSULTA}?id=${identificacion}`);
      setCargando(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        {/* Ícono de búsqueda */}
        <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center animate-scale-in hover:scale-110 transition-all duration-300 active-scale">
          <OptimizedImage
            src="/assets/images/icons/icono-busqueda.png"
            alt="Ícono de búsqueda"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <Input
        label="Identificación"
        name="identificacion"
        type="text"
        value={identificacion}
        onChange={(e) => setIdentificacion(e.target.value)}
        placeholder="Numero de identificación"
        required
        disabled={cargando}
        maxLength={25}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={cargando}
      >
        Buscar
      </Button>
    </form>
  );
};

export default ConsultaForm;
