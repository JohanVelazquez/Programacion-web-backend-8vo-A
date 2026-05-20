const crearUsuario = require('./objeto');

test('Los objetos deben ser iguales', () => {
    const usuarioEsperado = {
        nombre: 'Juan',
        edad: 20
    };

    expect(crearUsuario()).toEqual(usuarioEsperado);
});