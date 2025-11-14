/**
 * Componente PasswordInput - Campo de contraseña con visualización
 * 
 * Input especializado para contraseñas que permite mostrar/ocultar
 * el texto mediante un botón con icono de ojo interactivo.
 */

import React, { useState, forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, helperText, fullWidth = true, className = '', value, placeholder, ...props }, ref) => {
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const toggleMostrarContrasena = () => {
      setMostrarContrasena(!mostrarContrasena);
    };

    const widthStyle = fullWidth ? 'w-full' : '';
    
    // La etiqueta flota si hay valor o si el campo está enfocado
    const hasValue = value !== undefined && value !== null && value !== '';
    const shouldFloat = isFocused || hasValue;

    return (
      <div className={`${widthStyle} ${className}`}>
        <div className="relative">
          <fieldset
            className={`
              absolute inset-0
              border-2 rounded-lg
              pointer-events-none
              transition-all duration-300 ease-out
              z-0
              ${error 
                ? 'border-red-500 shadow-red-500/20 shadow-md' 
                : isFocused 
                  ? 'border-primary-500 shadow-primary-500/30 shadow-lg' 
                  : 'border-gray-900'
              }
            `}
          >
            <legend
              className={`
                ml-3 px-1 text-base transition-all duration-200 invisible
                ${shouldFloat ? 'max-w-full' : 'max-w-0 px-0'}
              `}
            >
              {shouldFloat && label && (
                <>
                  {label}
                  {props.required && <span className="text-red-500 ml-1">*</span>}
                </>
              )}
            </legend>
          </fieldset>

          {label && (
            <label 
              className={`
                absolute left-4 transition-all duration-300 ease-out pointer-events-none z-20
                ${shouldFloat 
                  ? 'top-0 translate-y-[-35%] text-lg text-gray-700 font-medium scale-95' 
                  : 'top-1/2 -translate-y-1/2 text-lg text-gray-500'
                }
              `}
            >
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          
          <input
            ref={ref}
            type={mostrarContrasena ? 'text' : 'password'}
            value={value}
            placeholder={isFocused ? placeholder : ''}
            className={`
              ${widthStyle}
              px-4 pr-12 rounded-lg
              focus:outline-none
              transition-all duration-300 ease-out
              disabled:bg-gray-100 disabled:cursor-not-allowed
              placeholder-gray-500 placeholder:text-base
              relative z-10
              bg-transparent
              text-base
              ${shouldFloat ? 'pt-6 pb-3' : 'py-3.5'}
              ${isFocused ? 'transform scale-[1.01]' : ''}
            `}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
          
          <button
            type="button"
            onClick={toggleMostrarContrasena}
            className={`absolute right-4 text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-300 z-20 hover:scale-110 active-scale ${shouldFloat ? 'top-[58%]' : 'top-1/2'} -translate-y-1/2`}
            aria-label={mostrarContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            tabIndex={-1}
          >
            {mostrarContrasena ? (
              <FaEyeSlash className="w-5 h-5 transition-transform" />
            ) : (
              <FaEye className="w-5 h-5 transition-transform" />
            )}
          </button>
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center animate-fade-in-down">
            <svg
              className="w-4 h-4 mr-1 animate-bounce-subtle"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
