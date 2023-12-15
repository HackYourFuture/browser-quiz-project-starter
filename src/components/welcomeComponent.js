import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeComponent = () => {
  const element = document.createElement('div');
  element.classList.add('container');
  element.innerHTML = String.raw`
    <h1>Welcome to Quiz</h1>
    <button id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
  `;
  return element;
};
