const obtenerNumero = require('./negacion');

test('El número no debe ser igual a 100', () => {
    expect(obtenerNumero()).not.toBe(100);
});