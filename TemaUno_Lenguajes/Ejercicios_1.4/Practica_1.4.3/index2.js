import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

var nombreEquipo = "";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next) {
  console.log(req.body);
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", registrador, (req, res) => {
  console.log(req.body);
  res.send("<h1>El nombre de tu equipo es:</h1><h2>" + nombreEquipo + " ✌️</h2>");
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});