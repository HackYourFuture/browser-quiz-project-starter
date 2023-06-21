import { START_QUIZ_BUTTON_ID } from '../constants.js';

import { ANSWER_BUTTONS } from '../constants.js';
import { SCORE_ELEMENT } from '../constants.js';
import { SCORE_BUTTON } from '../constants.js';
import { SCORE_MESSAGE } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>


  `;
  return element;
};
