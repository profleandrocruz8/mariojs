const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let gameRunning = true;

// Função para fazer o personagem Mario pular
const pulo = (event) => {
    if (event.code === 'Space' || event.code === 'SpaceBar') { // Verifica se a tecla pressionada é a barra de espaço
        if (!mario.classList.contains('pulo') && gameRunning) { // Verifica se o Mario não está pulando e o jogo está em execução
            mario.classList.add('pulo'); // Adiciona a classe 'pulo' para ativar a animação de pulo

            setTimeout(() => {
                mario.classList.remove('pulo'); // Remove a classe 'pulo' após um curto intervalo de tempo para encerrar a animação
            }, 500);
        }
    }
}

// Função para verificar a colisão entre o Mario e o cano
const checkCollision = () => {
    const marioRect = mario.getBoundingClientRect(); // Obtém o retângulo de colisão do Mario
    const pipeRect = pipe.getBoundingClientRect(); // Obtém o retângulo de colisão do cano

    // Verifica se houve colisão entre os retângulos do Mario e do cano
    if (
        marioRect.bottom >= pipeRect.top &&
        marioRect.left <= pipeRect.right &&
        marioRect.right >= pipeRect.left
    ) {
        // Se houve colisão, chama a função para reiniciar o jogo
        restartGame();
    }
}

// Função para reiniciar o jogo
const restartGame = () => {
    gameRunning = false; // Define o estado do jogo como não em execução
    alert('Game over!'); // Mostra um alerta indicando que o jogo acabou (você pode personalizar isso conforme necessário)
    location.reload(); // Recarrega a página para reiniciar o jogo
}

document.addEventListener('keydown', pulo); // Adiciona um EventListener para detectar pressionamentos de tecla e chamar a função pulo

// Verifica a colisão a cada intervalo de tempo (por exemplo, a cada 100 milissegundos)
setInterval(() => {
    if (gameRunning) { // Verifica se o jogo está em execução antes de verificar a colisão
        checkCollision(); // Chama a função para verificar a colisão
    }
}, 100);
