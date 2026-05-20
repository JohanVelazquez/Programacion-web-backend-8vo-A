import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.uri;
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const client = new MongoClient(uri);
let db;

// Conexión a MongoDB
async function conectarDB() {
  try {
    await client.connect();
    db = client.db("backend"); 
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar:", error);
  }
}

conectarDB();



app.get('/', (req, res) => {
  res.send('API CRUD funcionando');
});


// GET TODOS
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await db.collection('usuarios').find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});


// GET POR ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await db.collection('usuarios').findOne({
      _id: new ObjectId(id)
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});


// POST (crear)
app.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = req.body;

    const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);

    res.status(201).json(resultado);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});


// PUT (actualizar)
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const resultado = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: datos }
    );

    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado' });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});


// DELETE
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await db.collection('usuarios').deleteOne({
      _id: new ObjectId(id)
    });

    if (resultado.deletedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});


app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});