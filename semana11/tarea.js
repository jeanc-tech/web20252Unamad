const autos = [
  { marca: "BMW", modelo: "Serie 3", year: 2012, precio: 30000, puertas: 4, color: "Blanco", transmision: "automatico" },
  { marca: "Audi", modelo: "A4", year: 2018, precio: 40000, puertas: 4, color: "Negro", transmision: "automatico" },
  { marca: "Ford", modelo: "Mustang", year: 2015, precio: 20000, puertas: 2, color: "Blanco", transmision: "automatico" },
  { marca: "Audi", modelo: "A6", year: 2010, precio: 35000, puertas: 4, color: "Negro", transmision: "automatico" },
  { marca: "BMW", modelo: "Serie 5", year: 2016, precio: 70000, puertas: 4, color: "Rojo", transmision: "automatico" },
  { marca: "Mercedes Benz", modelo: "Clase C", year: 2015, precio: 25000, puertas: 4, color: "Azul", transmision: "automatico" },
  { marca: "Chevrolet", modelo: "Camaro", year: 2018, precio: 60000, puertas: 2, color: "Rojo", transmision: "manual" },
  { marca: "Ford", modelo: "Mustang", year: 2019, precio: 80000, puertas: 2, color: "Rojo", transmision: "manual" },
  { marca: "Dodge", modelo: "Challenger", year: 2017, precio: 40000, puertas: 4, color: "Blanco", transmision: "automatico" },
  { marca: "Audi", modelo: "A3", year: 2017, precio: 55000, puertas: 2, color: "Negro", transmision: "manual" },
  { marca: "Dodge", modelo: "Challenger", year: 2012, precio: 25000, puertas: 2, color: "Rojo", transmision: "manual" },
  { marca: "Mercedes Benz", modelo: "Clase C", year: 2018, precio: 45000, puertas: 4, color: "Azul", transmision: "automatico" },
  { marca: "BMW", modelo: "Serie 5", year: 2019, precio: 90000, puertas: 4, color: "Negro", transmision: "automatico" },
  { marca: "Ford", modelo: "Mustang", year: 2017, precio: 60000, puertas: 2, color: "Negro", transmision: "manual" },
  { marca: "Dodge", modelo: "Challenger", year: 2015, precio: 35000, puertas: 2, color: "Azul", transmision: "automatico" },
  { marca: "BMW", modelo: "Serie 3", year: 2018, precio: 50000, puertas: 4, color: "Blanco", transmision: "automatico" },
  { marca: "BMW", modelo: "Serie 5", year: 2017, precio: 80000, puertas: 4, color: "Negro", transmision: "automatico" },
  { marca: "Mercedes Benz", modelo: "Clase C", year: 2018, precio: 40000, puertas: 4, color: "Blanco", transmision: "automatico" },
  { marca: "Audi", modelo: "A4", year: 2016, precio: 30000, puertas: 4, color: "Azul", transmision: "automatico" }
];


// 1.- Autos que superen el año 2012

const autosPosteriores2012 = autos.filter(auto => auto.year > 2012);
console.log("Autos posteriores a 2012:", autosPosteriores2012);

// 2.- Autos solo de 2015 y 2018
const autos2015y2018 = autos.filter(auto => auto.year === 2015 || auto.year === 2018);
console.log("Autos de 2015 y 2018:", autos2015y2018);

// 3.- Autos de modelo de Clase "C"
const autosClaseC = autos.filter(auto => auto.modelo === "Clase C");
console.log("Autos de modelo Clase C:", autosClaseC);

// 4.- Autos de marca Audi de años mayores a 2012
const autosAudiPosteriores2012 = autos.filter(auto => auto.marca === "Audi" && auto.year > 2012);
console.log("Autos Audi posteriores a 2012:", autosAudiPosteriores2012);

// 5.- Promedio de precios de todos los autos
const promedioPrecios = autos.reduce((total, auto) => total + auto.precio, 0) / autos.length;
console.log("Promedio de precios de todos los autos:", promedioPrecios);        

// 6.- Promedio de precios de autos que tengan transmisión manual
const autosTransmisionManual = autos.filter(auto => auto.transmision === "manual");
const promedioPreciosManual = autosTransmisionManual.reduce((total, auto) => total + auto.precio, 0) / autosTransmisionManual.length;
console.log("Promedio de precios de autos con transmisión manual:", promedioPreciosManual);

// 7.- Autos que superen el precio de 45000
const autosPrecioSuperior45000 = autos.filter(auto => auto.precio > 45000);
console.log("Autos con precio superior a 45000:", autosPrecioSuperior45000);