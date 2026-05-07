const porcentagemAumento = 15;
const d = document;

const precoAtualInput = d.querySelector('#preco-atual');
const botaoEnviar = d.querySelector('#botao-enviar');
const mostrarResultadoHTML = d.querySelector('#mostrar-resultado'); 

function calcularAumento(preco) {
    const precoNovo = preco + ( (15 * preco) / 100);
    return precoNovo;
};

function mostrarPrecosHTML() {
    const precoOriginal = Number(precoAtualInput.value);
    const precoNovo = calcularAumento(precoOriginal);
    const mensagemHTML = `
        Preco original: ${precoOriginal}
        Preco com aumento de 15%: ${precoNovo}
        `;

    mostrarResultadoHTML.innerText = mensagemHTML;
};

botaoEnviar.addEventListener('click', () => {
    mostrarPrecosHTML();
});