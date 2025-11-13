/**
 * Componente LoginForm - Formulario de inicio de sesión
 * 
 * Maneja el login de usuarios con validaciones, protección contra
 * ataques y feedback visual al usuario.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { iniciarSesion } from '@services/authService';
import { validarUsuario, validarContrasena } from '@utils/validators';
import { MENSAJES_ERROR, RUTAS } from '@utils/constants';
import Input from '@components/common/Input';
import PasswordInput from './PasswordInput';
import Button from '@components/common/Button';
import ErrorMessage from '@components/common/ErrorMessage';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { establecerUsuario } = useAuth();
  
  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: '',
  });
  
  const [errores, setErrores] = useState({
    usuario: '',
    contrasena: '',
  });
  
  const [errorGeneral, setErrorGeneral] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo al empezar a escribir
    setErrores(prev => ({ ...prev, [name]: '' }));
    setErrorGeneral('');
  };

  const validarFormulario = (): boolean => {
    const validacionUsuario = validarUsuario(formData.usuario);
    const validacionContrasena = validarContrasena(formData.contrasena);
    
    const nuevosErrores = {
      usuario: validacionUsuario.valido ? '' : validacionUsuario.mensaje || '',
      contrasena: validacionContrasena.valido ? '' : validacionContrasena.mensaje || '',
    };
    
    setErrores(nuevosErrores);
    
    return validacionUsuario.valido && validacionContrasena.valido;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorGeneral('');
    
    if (!validarFormulario()) {
      return;
    }
    
    setCargando(true);
    
    try {
      const respuesta = await iniciarSesion({
        usuario: formData.usuario,
        contrasena: formData.contrasena,
      });
      
      if (respuesta.success && respuesta.usuario) {
        establecerUsuario(respuesta.usuario);
        navigate(RUTAS.DASHBOARD);
      } else {
        setErrorGeneral(respuesta.mensaje || MENSAJES_ERROR.CREDENCIALES_INVALIDAS);
      }
    } catch (error: any) {
      setErrorGeneral('Error aun no he terminado de hacer el dashboard');
    } finally {
      setCargando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Ícono de usuario */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img
            src="/assets/images/icons/icono-usuario.png"
            alt="Ícono de usuario"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {errorGeneral && (
        <ErrorMessage 
          message={errorGeneral}
          onRetry={() => setErrorGeneral('')}
        />
      )}

      <Input
        label="Usuario"
        name="usuario"
        type="text"
        value={formData.usuario}
        onChange={handleChange}
        error={errores.usuario}
        placeholder="Ingrese su usuario"
        required
        autoComplete="username"
        disabled={cargando}
        maxLength={25}
      />

      <PasswordInput
        label="Contraseña"
        name="contrasena"
        value={formData.contrasena}
        onChange={handleChange}
        error={errores.contrasena}
        placeholder="Ingrese su contraseña"
        required
        autoComplete="current-password"
        disabled={cargando}
        maxLength={25}
      />

      <div className="flex gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={cargando}
        >
          Ingresar
        </Button>
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={() => {
            setFormData({ usuario: '', contrasena: '' });
            setErrores({ usuario: '', contrasena: '' });
            setErrorGeneral('');
          }}
          disabled={cargando}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
