const tryAgainBtn 


const try-again = document.getElementById('.try-again');

const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
   
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '115px';
        margin.style.marginLeft = '50px';

        mario.src = './images/clouds.png';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('click', jump);

document.addEventListener('keydown', jump);

try-again.addEventListener('click', () => {
  // Reiniciar o jogo
  location.reload();
});
