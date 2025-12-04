let Productos = [50,20,10,100,30,10];
let Presupuesto = prompt("Ingrese su presupuesto: ");
let Total = 0;

for (let i=0; i<Productos.length;i++){
    Total += Productos[i];
    if (Total<=Presupuesto){
        console.log(Productos[i]);

    }
}