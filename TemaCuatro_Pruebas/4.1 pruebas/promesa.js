function obtenerPromesa(exito) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve('Operación exitosa');
        } else {
            reject('Ocurrió un error');
        }
    });
}

module.exports = obtenerPromesa;