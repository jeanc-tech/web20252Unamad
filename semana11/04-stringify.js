//Funcion Stringify----------------------------------------------
let platos = ["Ají de gallina", "Pachamanca", "Filete de Paiche", "Chanfainita", "Mostrito"]
let platosJSON = JSON.stringify(platos);
console.log(platosJSON);

console.log(typeof(platosJSON));

let platosJS = JSON.parse(platosJSON);
console.log(platosJS);