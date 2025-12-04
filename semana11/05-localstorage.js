let platos = ["Ají de gallina", "Pachamanca", "Filete de Paiche", "Chanfainita", "Mostrito"]
let platosJSON = JSON.stringify(platos);

localStorage.setItem("platosJSON", platosJSON);

let data = localStorage.getItem("platosJSON");
console.log("data", data);