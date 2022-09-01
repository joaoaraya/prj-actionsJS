let valorCheio = document.querySelector("#valorCheio");
let porcentagem = document.querySelector("#porcentagem");
let pessoasNaMesa = document.querySelector("#pessoasNaMesa");

function calcular() {
    let result = (porcentagem.value / 100) * valorCheio.value;
    mostrarResultado(result * pessoasNaMesa.value);
}

function mostrarResultado(result) {
    document.querySelector(".result").innerHTML = result;
}