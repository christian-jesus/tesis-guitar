import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Importar axios
import "./RegisterForm.css";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    age: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // Para redirigir a la página de Preferencias

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    
    // Enviar datos al backend
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log("Usuario registrado:", response.data);
      
      // Mostrar la ventana emergente por 2 segundos, luego redirigir
      setShowPopup(true);
      setError(null); // Limpiar error si el registro es exitoso
      setTimeout(() => {
        setShowPopup(false);
        navigate("/preferencias"); // Redirige a la página de Preferencias
      }, 2000);
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setError("Error al registrar el usuario, intente nuevamente."); // Mostrar mensaje de error
    }
  };

  return (
    <div className="register-form">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Nombre de Usuario:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Edad:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <button type="submit">Registrarse</button>
        <button type="button" className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </form>

      {showPopup && (
        <div className="popup success">
          <h3>Registrado correctamente</h3>
        </div>
      )}

      {error && (
        <div className="popup error">
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
