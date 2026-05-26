// Seleciona o botão e o corpo (body) da página
const botao = document.getElementById('botao-cor');
const corpoDaPagina = document.body;

// Função para gerar uma cor hexadecimal aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Adiciona um evento de clique ao botão
botao.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    corpoDaPagina.style.backgroundColor = novaCor;
});
