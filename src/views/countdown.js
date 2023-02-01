import { COUNT_DOWN } from '../constants.js';
import { nextQuestion } from '../pages/questionPage.js';
/*countdown start */
let time = 60;
const countdownEl = document.getElementById(COUNT_DOWN);
export const startCountdown = () => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;

  if (time === 0) {
    nextQuestion();
    time = 60;
  }
};
/*countdown end */
