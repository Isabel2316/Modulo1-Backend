// Manipulación de Archivos JSON con Node.js y el Módulo fs
// Consigna:
// 1. Crear un archivo JSON llamado productos.json que contenga un listado de
// productos.
// 2. Cada producto debe tener las siguientes propiedades: id, nombre, y precio.
// 3. Escribir un programa en Node.js que realice las siguientes tareas:
// • Lea el archivo productos.json y muestre en la consola el contenido actual.
// • Agregue un nuevo producto al listado.
// • Escriba nuevamente el archivo JSON con el producto añadido.
// • Verifique y muestre en la consola el archivo actualizado

// Importamos el módulo fs para trabajar con sistema de archivos/
const fs = require('fs');

// 2 definimos la ruta del archivo JSON/
const rutaArchivo = './productos.json';

// 3 leer el archivo JSON y mostrar su contenido/
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    const productos = JSON.parse(data);
    console.log('Contenido actual del archivo productos.json:', productos);

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'Zapatos',
        precio: 59.99
    };

    productos.push(nuevoProducto);
    fs.writeFile(rutaArchivo, JSON.stringify(productos, null, 2), (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        
        }     
    
        console.log('Archivo actualizado con el nuevo producto.');      
    productos.push(nuevoProducto);
    console.log('Producto añadido:', nuevoProducto);
    console.log('Contenido actualizado del archivo productos.json:', productos);
    });
});
