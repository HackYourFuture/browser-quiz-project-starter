import { TIMER_ID } from '../constants.js';
import {
  disableAnswerButtons,
  highlightCorrectAnswer,
} from './questionPage.js';

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

export const timeUP = (currentQuestion) => {
  disableAnswerButtons(currentQuestion);
  alert("⏳ Time's up! ⌛️");
  highlightCorrectAnswer(currentQuestion);
};
