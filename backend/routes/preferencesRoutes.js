const express = require('express');
const router = express.Router();
const preferenceController = require('../controllers/preferenceController');

// Ruta para crear preferencias
router.post('/create', preferenceController.createPreference);

module.exports = router;
