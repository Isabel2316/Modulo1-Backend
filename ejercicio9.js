// Ejercicio 9: Números únicos 🔄
// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.
// Consigna:
//  Usa el objeto Set para eliminar duplicados.
// Convierte el Set a un array usando el operador spread (...).

let numeros = [1, 2, 2, 3, 4, 4, 5, 5, 9, 6];
function eliminarDuplicados(arr) {
    let conjunto = new Set(arr); // Crear un Set a partir del array
    let arrayUnico = [...conjunto]; // Convertir el Set de nuevo a un array
    return arrayUnico;
}
// Prueba la función
console.log(eliminarDuplicados(numeros)); // Debería devolver [1, 2, 3, 4, 5, 6 , 9]