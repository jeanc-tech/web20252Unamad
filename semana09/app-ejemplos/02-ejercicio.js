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

//++VARIABLE
let numero1 = 10;
let i = 1;
console.log(numero1++);
console.log(++numero1);
console.log(numero1++);
console.log(++numero1);

//cambio de tipo de datos
let numero2 = "20";
let numero3 = "30";

let total = parseInt(numero2) + parseInt(numero3);
console.log(total)

let anio = 2023
console.log("Año es: ", anio.toString());