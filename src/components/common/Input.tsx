/**
 * Componente Input - Campo de entrada reutilizable
 */

import React, { forwardRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = true, className = '', value, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
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
            value={value}
            placeholder={isFocused ? placeholder : ''}
            className={`
              ${widthStyle}
              px-4 rounded-lg
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

Input.displayName = 'Input';

export default Input;
