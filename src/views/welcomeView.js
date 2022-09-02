'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.style.width = '60rem';
  element.style.height = '15rem';
  element.style.position = 'relative';
  element.innerHTML = String.raw`
    <h1>Welcome to MannaSwipe Quiz</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;

  return element;
};