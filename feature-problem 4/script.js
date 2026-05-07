const valorInicial = 1000;
const taxaJuros = 5;
const d = document;

const qtdMesesInput = d.querySelector('#qtd-meses');
const botaoEnviar = d.querySelector('#botao-enviar');
const mostrarResultadoHTML = d.querySelector('#mostrar-resultado'); 

function calcularMeses(qtdMeses) {
    let valorTotal = 1000

    valorTotal += (5 * valorTotal) / 100
    for (let mes = 0; mes <= qtdMeses; mes++) {
        valorTotal += (5 * valorTotal) / 100
    }
    return valorTotal
};

function mostrarValorTotalHTML() {
    const meses = Number(qtdMesesInput.value);
    const valorTotal = calcularMeses;

    mostrarResultadoHTML.innerHTML = `valorTotal: ${valorTotal}`
};

botaoEnviar.addEventListener('click', () => {
    mostrarValorTotalHTML();
});