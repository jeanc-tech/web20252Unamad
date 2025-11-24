let monto = prompt("Ingresa un monto para pagar: ");
monto = parseFloat(monto);
let igv = monto * 0.18;
let montoFinal = monto + igv;
alert (`El monto a pagar es de: S/.${montoFinal}`)