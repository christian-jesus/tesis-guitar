const Preference = require('../models/Preference');

// Controlador para crear preferencias
exports.createPreference = async (req, res) => {
  try {
    const { experienceLevel, musicPreferences, goal, hoursPerWeek, learningStyle } = req.body;

    // Verificar si los datos están llegando correctamente
    console.log('Datos recibidos en el backend:', req.body);

    const newPreference = new Preference({
      experienceLevel,
      musicPreferences,
      goal,
      hoursPerWeek,
      learningStyle
    });

    await newPreference.save();
    res.status(201).json({ message: 'Preferencias registradas correctamente' });
  } catch (error) {
    console.error('Error al registrar preferencias:', error);
    res.status(500).json({ message: 'Hubo un error al registrar las preferencias' });
  }
};
