const input = document.getElementById("buscador");
const items = document.querySelectorAll("#lista li");

input.addEventListener("input", function () {
    const texto = input.value.toLowerCase();

    items.forEach(function (item) {
        const contenido = item.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});
