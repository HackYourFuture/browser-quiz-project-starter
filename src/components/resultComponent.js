import { RETRY_BUTTON_ID } from "../constants";
import { quizData } from '../data.js';
import { initQuestionPage } from '../pages/questionPage.js';

export const createResultComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
    <button id="${RETRY_BUTTON_ID}">RETRY</button>
    `;
    element.querySelector(`#${RETRY_BUTTON_ID}`).addEventListener('click', restartQuiz)
    return element;
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;
  initQuestionPage();
};
