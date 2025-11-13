/**
 * Componente Footer - Pie de página con logos de universidades
 * 
 * Muestra los logos de las universidades con convenios educativos.
 */

import React from 'react';

const Footer: React.FC = () => {
  const universidades = [
    { nombre: 'Universidad de San Buenaventura', logo: '/assets/images/universidades/san-buenaventura.png' },
    { nombre: 'Pontificia Universidad Javeriana', logo: '/assets/images/universidades/javeriana.png' },
    { nombre: 'Universidad ICESI', logo: '/assets/images/universidades/icesi.png' },
    { nombre: 'Universidad', logo: '/assets/images/universidades/otra.png' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {universidades.map((uni, index) => (
            <div key={index} className="flex items-center">
              <img
                src={uni.logo}
                alt={uni.nombre}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                onError={(e) => {
                  // Ocultar imagen si no carga
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Colegio León de Greiff. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
