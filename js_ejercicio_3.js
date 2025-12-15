const input = document.getElementById("texto");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
    const valor = input.value;

    if (valor === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = valor + " ";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    input.value = "";
});
