let productos = [
    { nombre: "IPhone 17", precio: 4500},
    { nombre: "Laptop Gamer", precio: 8500},
    { nombre: "Mause Optico", precio: 80},
    { nombre: "Pack Mouse", precio: 10},
    { nombre: "Cooler para Laptop", precio: 250},
    { nombre: "Funda Protectora", precio: 150},
    { nombre: "Switch Care", precio: 6500},
    { nombre: "Memoria de 32Gb", precio: 250},
    { nombre: "Procesador de i7", precio: 550},
    { nombre: "Disco Duro SSD", precio: 350}
]

//Función MAP----------------------------------------------
// let prodIncrementoPrecio = productos.map((preProd) => {
//     let precioFinal = preProd.precio * 1.20
//     return precioFinal;
// })
// console.log("Los precios finales son: ", prodIncrementoPrecio);

//Función FILTER----------------------------------------------
// let prodCaros = productos
//     .filter(prod => prod.precio > 799)
//     .map(({ nombre, precio }) => ({ nombre, precio }));

// console.log("Productos caros:", prodCaros);
// prodCaros.forEach(p => console.log(`${p.nombre} - $${p.precio}`));
// let prodPreciosCaros = productos.filter((prod) => {
//     return prod.precio > 799
// })
// console.log(prodPreciosCaros);

//Función ForEACH----------------------------------------------
// let articulosPrecio = productos.forEach((artPrecio) => {
//     console.log(`El articulo ${artPrecio.nombre} tiene un precio de: ${artPrecio.precio}`);
// })

//Función REDUCE----------------------------------------------
//Suma total de los productos--
// let sumaTotal = productos.reduce((suma, artPrecio) => {
//     return suma + artPrecio.precio;
// },0);
// console.log("El total de los productos es: ", sumaTotal);

//Promedio de los productos--
// let promedioTotal = productos.reduce((suma, preArt) => {
//     return suma + preArt.precio / productos.length;
// },0);
// console.log("El promedio de los productos es: ", promedioTotal);

