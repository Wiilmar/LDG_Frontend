/**
 * Componente Carrusel - Carrusel automático de imágenes
 * 
 * Muestra imágenes en transición automática con efecto fade
 * sin necesidad de interacción del usuario.
 */

import React, { useState, useEffect } from 'react';

interface CarruselProps {
  totalImagenes?: number;
  intervalo?: number; // en milisegundos
  rutaBase?: string;
  className?: string;
  children?: React.ReactNode; // Para contenido adicional sobre el carrusel
}

const Carrusel: React.FC<CarruselProps> = ({
  totalImagenes = 7,
  intervalo = 5000, // 5 segundos por defecto
  rutaBase = '/assets/images/carrusel',
  className = '',
  children,
}) => {
  const [imagenActual, setImagenActual] = useState(0);
  const [cargando, setCargando] = useState(true);

  // Array de rutas de imágenes
  const imagenes = Array.from(
    { length: totalImagenes },
    (_, i) => `${rutaBase}/img-carrusel-${i + 1}.jpg`
  );

  // Cambio automático de imagen
  useEffect(() => {
    const timer = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % totalImagenes);
    }, intervalo);

    return () => clearInterval(timer);
  }, [totalImagenes, intervalo]);

  // Precargar imágenes
  useEffect(() => {
    imagenes.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        if (index === 0) setCargando(false);
      };
      img.onerror = () => {
        if (index === 0) setCargando(false);
      };
      img.src = src;
    });
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Skeleton de carga */}
      {cargando && (
        <div className="absolute inset-0 skeleton animate-pulse"></div>
      )}

      {/* Imágenes del carrusel */}
      {imagenes.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === imagenActual ? 'opacity-100 z-[5]' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      ))}

      {/* Overlay oscuro opcional */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-[15]"></div>

      {/* Contenido adicional (logos, etc.) */}
      {children && (
        <div className="relative z-[40] w-full h-full pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};

export default Carrusel;
