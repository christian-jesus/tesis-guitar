import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";  // Ruta correcta
import RegisterForm from "./components/RegisterForm"; // Ruta correcta
import Preferencias from "./components/Preferencias"; // Ruta correcta
import Tutoriales from "./components/Tutoriales"; // Nuevo componente para los tutoriales

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal es WelcomePage */}
        <Route path="/" element={<WelcomePage />} />
        {/* Ruta para el formulario de registro */}
        <Route path="/register" element={<RegisterForm />} />
        {/* Ruta para las preferencias del usuario */}
        <Route path="/preferencias" element={<Preferencias />} />
        {/* Ruta para el apartado de tutoriales */}
        <Route path="/tutoriales" element={<Tutoriales />} />
      </Routes>
    </Router>
  );
}

export default App;
