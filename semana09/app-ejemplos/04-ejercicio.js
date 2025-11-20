//suma
function suma (a, b){
    return a + b;
}
console.log(suma(6, 5));

//por expresion
const decremento = function(a,b){
    return a - b;
}
console.log(decremento(10, 6));

//por constructor (menos recomendada)
const saludo = new Function ("return 'Hola';");
console.log(saludo());

//Arrow function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 3));