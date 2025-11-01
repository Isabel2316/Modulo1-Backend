// Ejercicio 6: Calculadora de promedio 
// Escribe una función que reciba un array de números y devuelva el
// promedio.
//  Consigna:
// Usa un bucle for para sumar los números.
// Divide la suma total entre la cantidad de elementos del array.

let numeros = [10, 15, 30, 40, 50];
function calcularPromedio(arr) {
    let suma = 0; // Variable, guarda la suma  
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]; // Sumo cada número al total
    }
    return suma / arr.length; // Divido la suma entre la cantidad de números
}
// Prueba la función
console.log(calcularPromedio(numeros)); // Debería devolver 29


