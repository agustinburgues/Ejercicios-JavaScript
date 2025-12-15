const input = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiarCompletadas");
const lista = document.getElementById("listaTareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
renderizarTareas();

botonAgregar.addEventListener("click", function () {
    const texto = input.value.trim();
    if (texto === "") return;

    tareas.push({ texto: texto, completada: false });
    guardarYRenderizar();
    input.value = "";
});

botonLimpiar.addEventListener("click", function () {
    tareas = tareas.filter(tarea => !tarea.completada);
    guardarYRenderizar();
});

function renderizarTareas() {
    lista.innerHTML = ""; 
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;

        checkbox.addEventListener("change", function () {
            tarea.completada = checkbox.checked;
            guardarTareas();
        });

        const span = document.createElement("span");
        span.textContent = tarea.texto;
        if (tarea.completada) {
            span.style.textDecoration = "line-through";
        }

        checkbox.addEventListener("change", () => {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        lista.appendChild(li);
    });
}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function guardarYRenderizar() {
    guardarTareas();
    renderizarTareas();
}
