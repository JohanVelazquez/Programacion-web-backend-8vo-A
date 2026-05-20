const obtenerFrutas = require('./array');

test('El array debe contener Uva', () => {
    expect(obtenerFrutas()).toContain('Uva');
});