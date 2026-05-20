const obtenerNumero = require('./numeros');

test('Comparaciones numéricas', () => {
    const numero = obtenerNumero();

    expect(numero).toBeGreaterThan(10);

    expect(numero).toBeLessThan(20);

    expect(numero).toBeGreaterThanOrEqual(15);
});