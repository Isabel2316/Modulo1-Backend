//Ejercicio 1 ¿qyuien puede entrar al parque?
// Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. 
// Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.

//Consigna:
// Usa un bucle for y condicionales.
// Usa un array como entrada de la función.
// Devuelve el número de personas que cumplen con los requisitos.

let edades = [10, 15, 25, 8, 60, 45, 12, 61, 30];

function contarPersonas(edades){
    let contador = 0;
    for (let i = 0; i < edades.length; i++){
        if (edades[i] > 12 && edades[i] < 60){
            contador++;
        }
    }
    return contador;
}
console.log(contarPersonas(edades)); // Debería imprimir 5

