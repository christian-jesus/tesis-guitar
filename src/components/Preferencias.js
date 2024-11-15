import React, { useState } from "react";
import axios from 'axios';
import "./Preferencias.css";

const Preferencias = () => {
  const [preferences, setPreferences] = useState({
    experienceLevel: "Básico",
    musicPreferences: [],
    goal: "",
    hoursPerWeek: "",
    learningStyle: [],
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setPreferences({
        ...preferences,
        [name]: checked
          ? [...preferences[name], value]
          : preferences[name].filter((pref) => pref !== value),
      });
    } else {
      setPreferences({
        ...preferences,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verificar los datos antes de enviarlos
      console.log('Datos enviados al backend:', preferences);

      // Enviar los datos de preferencias al backend
      const response = await axios.post('http://localhost:5000/preferences/create', preferences);

      console.log(response.data); // Verifica la respuesta

      setShowPopup(true); // Mostrar popup de éxito
      setError(null); // Resetear el error
      setTimeout(() => setShowPopup(false), 2000); // Ocultar popup después de 2 segundos
    } catch (err) {
      console.error("Error al crear preferencias:", err);
      setError("Hubo un error al registrar las preferencias");
    }
  };

  return (
    <div className="preferencias-container">
      <h2>Preferencias</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nivel de Experiencia:
          <select
            name="experienceLevel"
            value={preferences.experienceLevel}
            onChange={handleChange}
          >
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </label>

        <fieldset>
          <legend>Preferencias Musicales:</legend>
          <div className="checkbox-group">
            {["Rock", "Pop", "Blues", "Jazz", "Country", "Cumbia", "Balada", "Metal", "Bolero"].map((genre) => (
              <label key={genre}>
                <input
                  type="checkbox"
                  name="musicPreferences"
                  value={genre}
                  checked={preferences.musicPreferences.includes(genre)}
                  onChange={handleChange}
                />
                {genre}
              </label>
            ))}
          </div>
        </fieldset>

        <label>
          ¿Cuál es tu meta al aprender guitarra?
          <input type="text" name="goal" value={preferences.goal} onChange={handleChange} />
        </label>

        <label>
          ¿Cuántas horas a la semana dedicarías?
          <input type="text" name="hoursPerWeek" value={preferences.hoursPerWeek} onChange={handleChange} />
        </label>

        <fieldset>
          <legend>¿Cómo te gustaría aprender?</legend>
          <div className="checkbox-group">
            {["Video tutoriales", "Partituras", "Ejercicios Interactivos"].map((method) => (
              <label key={method}>
                <input
                  type="checkbox"
                  name="learningStyle"
                  value={method}
                  checked={preferences.learningStyle.includes(method)}
                  onChange={handleChange}
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit">Guardar Preferencias</button>
      </form>

      {showPopup && (
        <div className="popup success">
          <h3>Preferencias creadas correctamente</h3>
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

export default Preferencias;
