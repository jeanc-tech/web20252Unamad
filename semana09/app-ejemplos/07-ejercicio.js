let numero = prompt("Ingresa un número: ");
numero = parseFloat(numero);
if (numero > 0) {
    console.log("El número es positivo");
    alert(`El número ${numero} es POSITIVO`);
} else if (numero < 0) {
    console.log("El número es negativo");
    alert(`El número ${numero} es NEGATIVO`);
} else if (numero === 0) {
    console.log("El número es cero");
    alert(`El número es CERO`);
} else {
    console.log("No es un número válido");
    alert("Por favor, ingresa un número válido");
}