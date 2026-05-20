const obtenerValores = require('./valores');

test('Verificar valores null, undefined y definidos', () => {
    const datos = obtenerValores();

    expect(datos.valorNulo).toBeNull();

    expect(datos.valorIndefinido).toBeUndefined();

    expect(datos.valorDefinido).toBeDefined();
});