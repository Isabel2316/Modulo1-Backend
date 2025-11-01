// Ejercicio 7: Filtrar palabras largas ✍️
// Escribe una función que reciba un array de palabras y un número, y
// devuelva las palabras que tienen más caracteres que el número dado.
// Consigna:
// Usa el método filter().
// Usa una función flecha para simplificar el código.

let palabras = ["sol", "luna", "estrella", "cometa", "galaxia"];
let numero = 4; // Número de referencia

function filtrarPalabrasLargas(palabras, num) {//Función para filtrar palabras largas
    return palabras.filter(palabra => palabra.length > num);//Filtro las palabras que tienen más caracteres que el número dado
} 
//Prueba la función
console.log(filtrarPalabrasLargas(palabras, numero)); // Debería devolver ["estrella", "cometa", "galaxia"]