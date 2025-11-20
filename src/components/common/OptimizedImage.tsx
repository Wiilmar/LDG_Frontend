/**
 * Componente OptimizedImage - Imagen optimizada con soporte WebP
 */

import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean; // Para imágenes importantes (logo, hero)
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  onError,
}) => {
  const [imageError, setImageError] = useState(false);

  // Generar ruta WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Verificar si existe versión WebP
  const hasWebP = src.match(/\.(jpg|jpeg|png)$/i);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  if (!hasWebP || imageError) {
    // Si no hay extensión de imagen o hay error, usar img normal
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onError={handleError}
      />
    );
  }

  return (
    <picture>
      {/* Versión WebP para navegadores modernos */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback a formato original */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;
