import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://www.scriptura-api.com/api/random');

        const quote = result.data.text;      
        const character = `${result.data.book} ${result.data.chapter}:${result.data.verse}`;

        res.render('index', {
            quote,
            character
        });

        console.log(result.data);

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }

        res.render('index',{
            quote: "No se pudo obtener el versículo",
            character: "Intenta más tarde"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});