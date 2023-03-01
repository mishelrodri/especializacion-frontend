let tarea;
const $btnAgregar = document.querySelector("#btnAgregar");
const tabla = document.querySelector("tbody");
$btnAgregar.addEventListener('click', () => {
    obtenerDatos();
    let numFila = tabla.rows.length;
    tabla.insertRow().innerHTML = crearFila(numFila);

})

function obtenerDatos() {
    tarea = document.querySelector("#tfEntrada").value;
    document.querySelector("#tfEntrada").value = "";
}

function crearFila(numFila) {
    let celda1 = "<td>" + numFila + "</td>";
    let celda2 = "<td>" + tarea + "</td>";
    let celda3 = "<td><button class='btnAccion' onClick='borrar(this)'>Borrar</button></td>";
    let celda4 = "<td><button class='btnAccion' onClick='finalizar(this)'>Finalizar</button></td>";
    return celda1 + celda2 + celda3 + celda4;
}


function borrar(btnBorrar) {
    let filaBorrar = btnBorrar.parentNode.parentNode;
    let encabezadoTabla = btnBorrar.parentNode.parentNode.parentNode;
    encabezadoTabla.removeChild(filaBorrar);
}

function finalizar(finalizarTarea) {
    let filaFinalizada = finalizarTarea.parentNode.parentNode;
    filaFinalizada.classList.add("finalizada");
}

document.querySelector("#btnLimpiar").addEventListener('click', () => {
    limpiar();
})

function limpiar() {
    let tabla = document.querySelector("#tblTareas");
    let filas = tabla.querySelectorAll("tr");
    for (let i = 0; i < filas.length; i++) {
        filas[i].parentNode.removeChild(filas[i]);

    }
}