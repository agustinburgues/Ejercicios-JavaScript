const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

document.getElementById("sumar").addEventListener("click", () => calcular("sumar"));
document.getElementById("restar").addEventListener("click", () => calcular("restar"));
document.getElementById("multiplicar").addEventListener("click", () => calcular("multiplicar"));
document.getElementById("dividir").addEventListener("click", () => calcular("dividir"));

function calcular(operacion) {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);

    if (isNaN(a) || isNaN(b)) {
        resultado.textContent = "Error: ingresá ambos números";
        return;
    }

    let res;

    switch (operacion) {
        case "sumar":
            res = a + b;
            break;
        case "restar":
            res = a - b;
            break;
        case "multiplicar":
            res = a * b;
            break;
        case "dividir":
            if (b === 0) {
                resultado.textContent = "Error: no se puede dividir por 0";
                return;
            }
            res = a / b;
            break;
    }

    resultado.textContent = "Resultado: " + res;
}
