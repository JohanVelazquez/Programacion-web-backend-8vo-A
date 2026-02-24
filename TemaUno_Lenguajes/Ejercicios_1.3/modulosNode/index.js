const fs = require('fs');

// Escribir en el archivo existente (archivo.txt)
fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
        return;
    }

    console.log('Archivo actualizado correctamente.');

    // Leer el mismo archivo
    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        console.log('Contenido del archivo txt:');
        console.log(data);
    });
});