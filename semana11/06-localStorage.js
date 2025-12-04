//Función para agregar tareas al LocalStorage
function agregarTarea(tarea) {
    //Paso 1: Verificar si ya existen tareas en el LocalStorage
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    //Paso 2: Agregar la nueva tarea al arreglo de tareas
    tareas.push(tarea);

    //Paso 3: Guardar el arreglo actualizado en el LocalStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) | [];
    console,log("Lista de Tareas:");
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tareas}`);
    });
}
//Función para obtener todas las tareas del LocalStorage
agregarTarea("Aprender JavaScript");
agregarTarea("Practicar HTML y CSS");
agregarTarea("Estudar LocalStorage");
agregarTarea("Aprender más algoritmos");
agregarTarea("Construir un proyecto web");
mostrarTareas();