// Ejercicio 8: Contador de letras 🎶
// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// Usa un bucle for y condicionales.
// Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = "El Raton, corre por el jardin";
let letraBuscada = "r"; // Letra a buscar

function contarLetra(cadena, letra) {
    let contador = 0; // Variable para contar las apariciones
    let letraMinuscula = letra.toLowerCase(); // Convertir la letra a minúscula
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === letraMinuscula) { // Comparar en minúscula
            contador++; // Incrementar el contador si hay coincidencia
        }
    }   
    return contador; // Devolver el total de apariciones
} 

// Prueba la función
console.log(contarLetra(texto, letraBuscada)); // Debería devolver 5    
