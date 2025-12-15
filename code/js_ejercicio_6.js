let horas = 0;
let minutos = 0;
let segundos = 0;

let intervalo = null;

const tiempo = document.getElementById("tiempo");

document.getElementById("iniciar").addEventListener("click", iniciar);
document.getElementById("pausar").addEventListener("click", pausar);
document.getElementById("reiniciar").addEventListener("click", reiniciar);

function iniciar() {
    // Evita múltiples intervalos
    if (intervalo !== null) return;

    intervalo = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }

        actualizarPantalla();
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarPantalla();
}

function actualizarPantalla() {
    tiempo.textContent =
        `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
}

function formato(valor) {
    return valor < 10 ? "0" + valor : valor;
}
