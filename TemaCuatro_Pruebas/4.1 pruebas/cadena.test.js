const obtenerMensaje = require('./cadena');

test('La cadena debe contener la palabra Hola', () => {
    expect(obtenerMensaje()).toMatch(/Hola/);
});