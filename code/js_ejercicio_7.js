const input = document.getElementById("longitud");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("generar");

boton.addEventListener("click", generarPassword);

function generarPassword() {
    const longitud = parseInt(input.value);

    if (isNaN(longitud) || longitud < 4) {
        resultado.textContent = "Error: la longitud debe ser mayor o igual a 4";
        return;
    }

    const caracteres =
        "abcdefghijklmnopqrstuvwxyz" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "0123456789" +
        "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres[indice];
    }

    resultado.textContent = "Contraseña: " + password;
}
