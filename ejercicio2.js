//Ejercicio 2: El menú del día 🍽️
//Escribe una función que reciba un objeto con platos y precios, y devuelva
//los platos cuyo precio sea menor a $200.
//Consigna:
// Usa un bucle for...in.
// Usa objetos y arrays.

let menu = {
    "Milanesa": 250,
    "Ensalada": 150,
    "Sopa": 100,
    "Pasta": 300,
    "Pizza": 180
};
function platosBaratos(menu) {
    let platos = [];//Array para guardar los platos baratos
    for (let plato in menu) {
        if (menu[plato] < 200) {//si el precio es menor a 200
            platos.push(plato); //agrego el plato si cumple la condicion 
        }
    }
    return platos;
} 
//Prueba la función
console.log(platosBaratos(menu)); // Debería devolver ["Ensalada", "Sopa", "Pizza"]  
