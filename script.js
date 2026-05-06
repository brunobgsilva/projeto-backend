const estoqueInicial = 120;
const d = document;

const qtdProdutosInput = d.querySelector('#qtd-produtos-vendidos');
const botaoEnviar = d.querySelector('#botao-enviar');
const mostrarResultadoHTML = d.querySelector('#mostrar-resultado'); 

function calcularEstoqueRestante(qtdProdutosVendidos) {
    const estoqueRestante = estoqueInicial - qtdProdutosVendidos;
    return estoqueRestante;
};

function mostrarEstoqueRestanteHTML() {
    const qtdProdutos = Number(qtdProdutosInput.value)
    const mensagemHTML = `Estoque restante: ${calcularEstoqueRestante(qtdProdutos)}`;

    mostrarResultadoHTML.innerText = mensagemHTML;
};

botaoEnviar.addEventListener('click', () => {
    mostrarEstoqueRestanteHTML();
});