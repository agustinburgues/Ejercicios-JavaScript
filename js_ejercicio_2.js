let clicks = 0;

const boton = document.getElementById("btnContar");
const texto = document.getElementById("contador");

boton.addEventListener("click", function () {
    clicks++;
    texto.textContent = "Clics: " + clicks;
});
