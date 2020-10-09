const keys = document.querySelectorAll('.btn');

const haha1 = document.querySelector('.haha1');
const haha2 = document.querySelector('.haha2');
const haha3 = document.querySelector('.haha3');
const boo = document.querySelector('.boo');
const yahoo = document.querySelector('.yahoo');

keys.forEach(key => {key.addEventListener('transitionend', removeTransition); });
window.addEventListener('keydown', playAudio);

haha1.addEventListener('animationend', removeAnimation);
haha2.addEventListener('animationend', removeAnimation);
haha3.addEventListener('animationend', removeAnimation);
boo.addEventListener('animationend', removeAnimation);
yahoo.addEventListener('animationend', removeAnimation);

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`)
  const key = document.querySelector(`.btn[data-key="${e.code}"]`)

  if (!audio) return 

  audio.currentTime = 0;
  audio.play();

  switch (e.code) {
    case 'KeyL':
      haha1.classList.add('haha-play');
      haha2.classList.add('haha-play');
      haha3.classList.add('haha-play');
      break;
    case 'KeyB':
      boo.classList.add('boo-play');     
      break;
    case 'KeyY':
      yahoo.classList.add('yahoo-play');          
      break;
    default:
      break;
  }

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

function removeAnimation(e) {
  this.classList.remove('haha-play');
  this.classList.remove('boo-play');
  this.classList.remove('yahoo-play');
}