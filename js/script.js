const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const margin = document.querySelector('.game-board');
//coin
const coin = document.querySelector('.coin');
const scoreDisplay = document.querySelector('.score');

let score = 0;

const collectCoin = () => {
  score++;
  scoreDisplay.textContent = score;
  coin.style.display = 'none';
}

const checkCollision = () => {
  const marioRect = mario.getBoundingClientRect();
  const coinRect = coin.getBoundingClientRect();

  if (marioRect.bottom >= coinRect.top && 
      marioRect.top <= coinRect.bottom &&
      marioRect.right >= coinRect.left &&
      marioRect.left <= coinRect.right) {
        collectCoin();
      }
}



setInterval(checkCollision, 10);
//coin 

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const restartGame = () => {
  window.location.reload();
  
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.gif';
    mario.style.width = '140px';
    
    margin.style.marginLeft = 'px';

    const tryAgainButton = document.createElement('button');
  tryAgainButton.innerText = 'Try again';
  tryAgainButton.addEventListener('click', restartGame);
  tryAgainButton.style.position = 'absolute';
  tryAgainButton.style.top = '50%';
  tryAgainButton.style.left = '50%';
  tryAgainButton.style.transform = 'translate(-50%, -50%)';
  tryAgainButton.style.fontSize = '24px';
  tryAgainButton.style.padding = '16px 32px';
  margin.appendChild(tryAgainButton);
  clearInterval(loop);
  musica1.pause(); // pausa a música ao reiniciar o jogo
};
}, 10);
  
document.addEventListener('click', jump);

document.addEventListener('keydown', jump);

coin.addEventListener('click', () => {
  coin.remove();
  score += 1;
  const scoreElement = document.querySelector('.score');
  scoreElement.textContent = `Score: ${score}`;
});