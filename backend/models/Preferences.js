const mongoose = require('mongoose');

// Esquema de preferencias para MongoDB
const preferenceSchema = new mongoose.Schema({
  experienceLevel: { type: String, required: true },
  musicPreferences: { type: [String], required: true },
  goal: { type: String, required: true },
  hoursPerWeek: { type: String, required: true },
  learningStyle: { type: [String], required: true },
}, {
  timestamps: true,  // Agrega createdAt y updatedAt
});

// Modelo de preferencia apuntando a la colección 'preferences'
const Preference = mongoose.model('Preference', preferenceSchema, 'preferences');
module.exports = Preference;
