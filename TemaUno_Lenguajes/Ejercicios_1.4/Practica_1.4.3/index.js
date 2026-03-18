import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

// Middleware de body-parser para procesar formularios, leer los datos para el servidor
app.use(bodyParser.urlencoded({ extended: true }));

// Servir el formulario index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ruta POST para recibir datos del formulario
app.post("/submit", (req, res) => {
  console.log(req.body); // imprime en consola los datos enviados
  res.send("Datos recibidos");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
