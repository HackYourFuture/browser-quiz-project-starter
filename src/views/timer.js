import { loadBackgrounds } from './loadBackgrounds.js';

export let intervalId;

export function timerSecond() {
  let seconds = 10;
  let el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);
  const rightAnswerSound = document.querySelector('#right-answer-audio');

  function decreaseSeconds() {
    el.innerText = seconds;
    seconds -= 1;

    if (seconds < 10) {
      rightAnswerSound.play();
    }

    if (seconds === 0) {
      clearInterval(intervalId);
      nextQuestion();
      removeElement();
      loadBackgrounds();
    }
    console.log(seconds);
  }
  intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  let el = document.querySelector('.seconds-counter');
  el.remove();
}
