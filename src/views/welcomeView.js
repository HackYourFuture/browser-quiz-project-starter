'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { HIGH_SCORE_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('flex-center', 'flex-column');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}" class="btn">start quiz</button>
    <button id="${HIGH_SCORE_BUTTON_ID}" class="btn">High Scores</button>
  `;
  return element;
};
