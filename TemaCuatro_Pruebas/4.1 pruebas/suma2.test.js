const suma = require('./suma');

test('10 + 10 debe ser igual a 20', () => {
    expect(suma(10, 10)).toBe(20);
});