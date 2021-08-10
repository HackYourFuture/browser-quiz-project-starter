import { createDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { handleNextQuestion } from '../handlers/questionHandlers.js';
import { QUIZ_Interface_BOX } from '../constants.js';

let timeOver = null;

export const countDownTimer = () => {
  const timerElement = createDOMElement('p');
  timerElement.classList.add('timer');

  QUIZ_Interface_BOX.appendChild(timerElement);

  const startingMinutes = quizData.timer;

  let time = startingMinutes * 60;

  timeOver = setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (time <= 0) {
      stopTimer();
      handleNextQuestion();
    }
    timerElement.textContent = ` ${minutes} : ${seconds}`;
    time--;
  }
};

export const stopTimer = () => {
  clearInterval(timeOver);
};
