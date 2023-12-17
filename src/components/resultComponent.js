import { RETRY_BUTTON_ID } from '../constants';
import { quizData } from '../data.js';
import { initQuestionPage } from '../pages/questionPage.js';
import { evaluateScore } from '../utils/evaluateScore.js';

export const createResultComponent = () => {
  const evaluation = evaluateScore(quizData.totalScore);
  const element = document.createElement('div');
  element.classList.add('card');

  element.innerHTML = String.raw`
    <h1 class='score'>Your Score is: <br/> <span id="totalScore">${quizData.totalScore} / 100</span></h1>
    <div id="evaluation">
    <h1 class='finalMessage'>" ${evaluation} "</h1>
    </div>
    <button id="${RETRY_BUTTON_ID}" class='next-btn'>RETRY</button>
    `;
  element
    .querySelector(`#${RETRY_BUTTON_ID}`)
    .addEventListener('click', restartQuiz);
  return element;
};

const restartQuiz = () => {
  localStorage.setItem('answeredQuestions', JSON.stringify([]));
  quizData.currentQuestionIndex = 0;
  quizData.totalScore = 0;
  initQuestionPage();
};
