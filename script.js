// Selecionando os elementos do HTML
const btnFarmar = document.getElementById('btn-farmar');
const contadorElemento = document.getElementById('contador');
const tituloElemento = document.getElementById('titulo');
const corpoDaPagina = document.body;

let aura = 0;
const limite = 3000;

btnFarmar.addEventListener('click', () => {
    // Só adiciona se ainda não chegou no limite
    if (aura < limite) {
        aura++;
        contadorElemento.textContent = aura;

        // Se acabou de chegar no limite de 3000
        if (aura === limite) {
            // Adiciona a classe que muda o fundo e estilos para azul no CSS
            corpoDaPagina.classList.add('limite-atingido');
            
            // Muda o texto do título principal
            tituloElemento.textContent = "Você farmou infinita aura";
            
            // Desabilita o botão para o usuário ver que acabou o farm
            btnFarmar.textContent = "Max Aura";
        }
    }
});
