import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.uri
const app = express();
const puerto = 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// Arrancar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});


// Conecta a la base de datos
mongoose.connect(uri)
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
