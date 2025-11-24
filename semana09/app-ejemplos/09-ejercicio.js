function calcularMonto() {
    let montoTotal = parseFloat(document.getElementById('montoTotal').value);
    if (isNaN(montoTotal)) {
        alert("Por favor ingresa un monto válido.");
        return;
    }
    let montoPorAmigo = montoTotal / 3;
    alert("Cada amigo debe pagar: " + montoPorAmigo.toFixed(2));
}

function combinacionCadenas() {
    let cadena1 = document.getElementById('cadena1').value;
    let cadena2 = document.getElementById('cadena2').value;
    if (!cadena1 || !cadena2) {
        alert("Por favor ingresa ambas cadenas.");
        return;
    }
    let resultado = cadena1.slice(0, 3) + cadena2 + cadena1.slice(3);
    alert("El resultado es: " + resultado);
}

function calcularAreas() {
    let base1 = parseFloat(document.getElementById('base1').value);
    let altura1 = parseFloat(document.getElementById('altura1').value);
    let base2 = parseFloat(document.getElementById('base2').value);
    let altura2 = parseFloat(document.getElementById('altura2').value);

    if (isNaN(base1) || isNaN(altura1) || isNaN(base2) || isNaN(altura2)) {
        alert("Por favor ingresa valores válidos para las bases y alturas.");
        return;
    }

    let area1 = (base1 * altura1) / 2;
    let area2 = (base2 * altura2) / 2;

    if (area1 > area2) {
        alert("El primer triángulo tiene el área más grande: " + area1);
    } else if (area1 < area2) {
        alert("El segundo triángulo tiene el área más grande: " + area2);
    } else {
        alert("Ambos triángulos tienen el mismo área.");
    }
}
