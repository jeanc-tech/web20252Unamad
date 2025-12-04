let albumMusical = {
    grupo: "Grupo 5",
    nombre: "El Ritmo de mi corazón",
    fecha: "30/02/2013",
    generos: ["Cumbia", "Salsa"],
    canciones: [
        {
            nombre: "El ritmo de mi corazón",
            duracion: 3.43,
            autores: ["Gian Marco", "Dante Cardosa"]
        },
        {
            nombre: "Mi buen amor",
            duracion: 2.50,
            autores: ["Gloria Estefan", "Estefano", "Carlos Yaipen"]
        },
        {
            nombre: "Rosa Pastel",
            duracion: 3.35,
            autores: ["Shamira", "Dante Cardosa"]
        },
    ],
    produccion: {
        arreglos: ["Elmer Yaipen", "Andy Yaipen"]
    }
}
console.log(albumMusical.canciones[2].autores[0])