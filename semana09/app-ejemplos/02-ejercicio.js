//suma

let monitor = 100;
let cpu = 120;
let memoria = 350;

let precioTotal = monitor + cpu + memoria;
console.log("Precio Total: ", precioTotal);

let adicionlaes = 50 + 10;
console.log("Adicionales: ", adicionlaes);

//Resta
let descuento = 25;
let precioConDscto = precioTotal - descuento;
console.log("Precio con Dscto: ", precioConDscto);

//Dividir en cuotas
let cuotas = precioConDscto / 2;
console.log("Con cuotas es: ", cuotas);

//Multiplicar
let totalPorTres = precioConDscto * 3;
console.log("Precio por tres unidades: ", totalPorTres);