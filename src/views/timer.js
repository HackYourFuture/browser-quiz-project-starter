import { loadBackgrounds } from './loadBackgrounds.js';
import { nextQuestion } from '../pages/questionPage.js';

export let intervalId;

export function timerSecond() {
  let seconds = 40;
  let el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);
  const clockTickingSound = document.querySelector('#clock-ticking');

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;

    if (seconds < 11) {
      clockTickingSound.play();
    }

    if (seconds === 0) {
      clearInterval(intervalId);
      nextQuestion();
      removeElement();
      loadBackgrounds();
    }
  }
  intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  let el = document.querySelector('.seconds-counter');
  el.remove();
}
