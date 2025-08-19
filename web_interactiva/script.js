let reto1 = false;
let reto2 = false;
let reto3 = false;

let reto1_es_13 = false;
let reto2_es_13 = false;
let reto3_es_13 = false;

function verificarRespuesta(idInput, idEstado, respuestaCorrecta) {
    const valor = parseInt(document.getElementById(idInput).value);
    const estado = document.getElementById(idEstado);

    if (valor === respuestaCorrecta) {
        estado.textContent = "✔️ Correcto";
        estado.style.color = "lightgreen";
        return "correcto";
    } else if (valor === 13) {
        estado.textContent = "❌ Incorrecto";
        estado.style.color = "red";
        return "trece";
    } else {
        estado.textContent = "❌ Incorrecto";
        estado.style.color = "red";
        return "incorrecto";
    }
}

// pregunta 1
function verificarReto1() {
    let resultado = verificarRespuesta("respuesta1", "estado1", 12);
    reto1 = (resultado === "correcto");
    reto1_es_13 = (resultado === "trece");
    verificarTodos();
}

// pregunta 2
function verificarReto2() {
    let resultado = verificarRespuesta("respuesta2", "estado2", 27);
    reto2 = (resultado === "correcto");
    reto2_es_13 = (resultado === "trece");
    verificarTodos();
}

// pregunta 3
function verificarReto3() {
    let resultado = verificarRespuesta("respuesta3", "estado3", 25);
    reto3 = (resultado === "correcto");
    reto3_es_13 = (resultado === "trece");
    verificarTodos();
}


function verificarTodos() {

    if (reto1 && reto2 && reto3) {
        document.getElementById("mensaje-succ").classList.remove("oculto");
    }


    if (reto1_es_13 && reto2_es_13 && reto3_es_13) {
        document.getElementById("mensaje-secreto").classList.remove("oculto");
    }
}
