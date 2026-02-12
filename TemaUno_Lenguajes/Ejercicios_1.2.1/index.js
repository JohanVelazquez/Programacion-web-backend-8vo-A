//Ejercicios 1.2.1:  Sintaxis básica de Node.js
//Alumno: Johan Andres Velazquez Caamal

// ================== EJERCICIO a ==================
// Comentarios en línea y multilínea
// Este ejercicio muestra cómo usar comentarios en JavaScript


console.log("\n======== EJERCICIO b ========");
let numero = 21;
let texto = "Hola mundo";
let booleano = true;
let indefinido;
let nulo = null;
let objeto = { nombre: "Johan Velazquez" };
let simbolo = Symbol("id");
let bigInt = 12345678901234567890n;

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);
console.log("Objeto:", objeto);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigInt);


console.log("\n======== EJERCICIO c ========");
let arrayMixto = [123, "cadena", true, { clave: "valor" }, null];
console.log(arrayMixto);


console.log("\n======== EJERCICIO d ========");
function polinomioSegundoGrado(a, b, c, x) {
    return a * x * x + b * x + c;
}
console.log(polinomioSegundoGrado(2, 3, 1, 5));


console.log("\n======== EJERCICIO e ========");
const manipularCadena = (str) => str.toUpperCase();
console.log(manipularCadena("hola mundo"));


console.log("\n======== EJERCICIO f ========");
function imprimirDescendente() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
imprimirDescendente();


console.log("\n======== EJERCICIO g ========");
const institucion = {
    nombre: "Tecnologico Nacional de Mexico",
    ubicacion: "Felipe Carrillo Puerto, Quintana Roo",
    estudiantes: 1200,
    carreras: ["Sistemas computacionales", "Industrias alimentarias", "Gestión empresarial", "Ciencia de Datos",
        "Administración", "Desarrollo comunitario", "Industrial"]
};
console.log(institucion);


console.log("\n======== EJERCICIO h ========");
institucion.descripcion = function () {
    return `${this.nombre} ubicada en ${this.ubicacion}, con ${this.estudiantes} estudiantes.`;
};
console.log(institucion.descripcion());


console.log("\n======== EJERCICIO i ========");
const math = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => b !== 0 ? a / b : "Error: división por cero"
};
console.log("Suma:", math.suma(5, 3));
console.log("Resta:", math.resta(10, 4));
console.log("Multiplicación:", math.multiplicacion(2, 6));
console.log("División:", math.division(8, 2));


console.log("\n======EJERCICIO j ========");
function operacionAsincronica(callback) {
    setTimeout(() => {
        const resultado = "Operación completada";
        callback(resultado);
    }, 2000);
}
operacionAsincronica((res) => console.log(res));


console.log("\n======== EJERCICIO k ========");
function convertirCadenaANumero(cadena) {
    try {
        const numero = Number(cadena);
        if (isNaN(numero)) throw new Error("No es un número válido");
        console.log(numero);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
convertirCadenaANumero("123");   // válido
convertirCadenaANumero("abc");   // error





