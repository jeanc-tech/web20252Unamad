let base1 = parseFloat(prompt("Introduce la base del primer triángulo:"));
let altura1 = parseFloat(prompt("Introduce la altura del primer triángulo:"));
let base2 = parseFloat(prompt("Introduce la base del segundo triángulo:"));
let altura2 = parseFloat(prompt("Introduce la altura del segundo triángulo:"));

let area1 = (base1 * altura1) / 2;
let area2 = (base2 * altura2) / 2;

if (area1 > area2) {
  alert("El primer triángulo tiene el área más grande: " + area1);
} else if (area1 < area2) {
  alert("El segundo triángulo tiene el área más grande: " + area2);
} else {
  alert("Ambos triángulos tienen el mismo área.");
}
