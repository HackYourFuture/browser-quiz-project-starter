import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * 
 * @returns {Element}
 */
 document.title="General Knowledge Quiz";

 

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
