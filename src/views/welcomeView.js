import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('quiz-container');
  element.innerHTML = String.raw`
    <h1>Welcome to the Quiz App</h1>
    <button class="btn btn-primary" id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
  `;
  return element;
};
