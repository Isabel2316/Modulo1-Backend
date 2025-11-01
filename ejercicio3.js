// Ejercicio 3: Ordenando números 
//Crea una función que reciba un array de números y devuelva un nuevo
//array con los números ordenados de menor a mayor.
//Consigna:
// Usa el método sort().

let numeros = [10, 3, 15, 1, 2, 7];
function ordenarNumeros(arr) {
    return arr.sort((a, b) => a - b); //Ordena de menor a mayor
}   

//Prueba la función
console.log(ordenarNumeros(numeros)); // Debería devolver [1, 2, 3, 5, 7, 10, 15]