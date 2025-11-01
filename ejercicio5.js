// Ejercicio 5: Generador de iniciales 🅰️
//Escribe una función que reciba un nombre completo y devuelva las
//iniciales en mayúsculas.
//Consigna:
// Usa el método split() para dividir el nombre.
// Usa un bucle for y métodos de string.

let nombreCompleto = "Maria Isabel Perez"
function obtenerIniciales(nombre) {
    let partes = nombre.split(" "); //Divido el nombre por espacios 
    let iniciales = ""; // guardar las iniciales
    for (let i = 0; i < partes.length; i++) {
        iniciales += partes[i][0].toUpperCase(); //Agrego la primera letra en mayuscula
    }
    return iniciales;
}
//Prueba la función
console.log(obtenerIniciales(nombreCompleto)); // Debería devolver "MIP"    
