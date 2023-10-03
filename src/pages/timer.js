import { TIMER_ID } from '../constants.js';
let timer;
let timeLeft = 10;

export const startTimer = (callback) => {
  timer = setInterval(() => {
    timeLeft--;
    const timeElement = document.getElementById(TIMER_ID);
    if (timeElement) {
      timeElement.innerText = timeLeft;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      callback();
    }
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(timer);
  timeLeft = 10;
  const timeElement = document.getElementById(TIMER_ID);
  if (timeElement) {
    timeElement.innerText = timeLeft;
  }
};
