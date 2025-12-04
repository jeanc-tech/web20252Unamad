let numero = parseInt(prompt("Ingrese un número:"));
let suma = 0;
    for (let i = 1; i < numero; i++) {
        suma += i;
    }
    console.log("La suma de los números menores a " + numero + " es: " + suma);
