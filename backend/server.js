const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const preferenceRoutes = require('./routes/preferenceRoutes'); // Correcto: Ruta de preferencias
const authRoutes = require('./routes/authRoutes'); // Ruta de autenticación (ya existente)

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos proguitar'))
  .catch((error) => console.log('Error al conectar a la base de datos', error));

// Rutas
app.use('/auth', authRoutes);  // Rutas de autenticación
app.use('/preferences', preferenceRoutes);  // Ruta para manejar preferencias

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
