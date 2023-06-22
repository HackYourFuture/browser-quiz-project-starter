import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome to JavaScript quiz!</h1>
    <button id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
  `;
  return element;
};
