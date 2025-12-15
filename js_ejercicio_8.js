const textarea = document.getElementById("texto");
const caracteres = document.getElementById("caracteres");
const palabras = document.getElementById("palabras");

textarea.addEventListener("input", function () {
    const texto = textarea.value;

    const totalCaracteres = texto.replace(/\s/g, "").length;

    const listaPalabras = texto
        .trim()
        .split(/\s+/)
        .filter(p => p.length > 0);

    const totalPalabras = texto.trim() === "" ? 0 : listaPalabras.length;

    caracteres.textContent = "Caracteres: " + totalCaracteres;
    palabras.textContent = "Palabras: " + totalPalabras;
});
