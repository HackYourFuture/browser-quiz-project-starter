import { nextQuestion } from './pages/questionPage.js';

let interval;

export function timer() {
  let timerEl = document.getElementById('timeLeft');
  let sec = 10;

  function countdown() {
    let timer = document.getElementById('timer');
    sec--;
    timerEl.innerHTML = `00: ${sec}`;
    if (sec < 10) {
      // timer.style.backgroundColor = 'red';
      // timer.style.color = 'black';
      timerEl.innerHTML = `00: 0${sec}`;
    }
    if (sec <= 0) {
      timerEl.innerHTML = "Time's up!";
      clearInterval(interval);
      setTimeout(nextQuestion, 1000);
    }
  }
  function startTimer() {
    clearInterval(interval);
    sec = 30;
    interval = setInterval(countdown, 1000);
  }

  if (interval === undefined) {
    startTimer();
  } else {
    timerEl.innerHTML = '';
    startTimer();
  }
}
