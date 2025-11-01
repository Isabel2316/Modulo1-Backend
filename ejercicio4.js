// Ejercicio 4: Contando vocales 🅰️🅾️
//Crea una función que reciba una cadena de texto y devuelva cuántas
//vocales contiene.
//Consigna:
// Usa un bucle for y condicionales.
// Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Hola, ¿cómo estás?";
function contarVocales(cadena) {
    let contador = 0;  //Contador de vocales
    let vocales = "aeiouAEIOU"; //Todas las vocales mayusculas y minusculas
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) { //Si el caracter es una vocal
            contador++; //Incremento el contador
        }
    } 
    return contador;
}
//Prueba la función
console.log(contarVocales(texto)); // Debería devolver 7



