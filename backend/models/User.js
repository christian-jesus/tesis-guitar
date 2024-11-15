const mongoose = require('mongoose');

// Esquema de usuario para MongoDB
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,  // Agrega createdAt y updatedAt
});

// Modelo de usuario apuntando a la colección 'login'
const User = mongoose.model('User', userSchema, 'login');
module.exports = User;
