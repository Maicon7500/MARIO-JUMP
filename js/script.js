const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const margin = document.querySelector('.game-board');

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

    mario.src = './images/game-over.png';
    mario.style.width = '80px';
    margin.style.marginLeft = '90px';

    const tryAgainButton = document.createElement('button');
    tryAgainButton.innerText = 'Try again';
    tryAgainButton.addEventListener('click', restartGame);
    margin.appendChild(tryAgainButton);

    clearInterval(loop);
  }
}, 10);
  
document.addEventListener('click', jump);

document.addEventListener('keydown', jump);