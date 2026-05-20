const obtenerPromesa = require('./promesa');

test('La promesa debe resolverse correctamente', async () => {
    await expect(obtenerPromesa(true))
        .resolves
        .toBe('Operación exitosa');
});

test('La promesa debe rechazar con error', async () => {
    await expect(obtenerPromesa(false))
        .rejects
        .toBe('Ocurrió un error');
});