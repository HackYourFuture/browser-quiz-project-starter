'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('welcome-page');
  element.innerHTML = String.raw`
    <h1>${document.title}</h1>
    <ul class="about-quiz">
    <li>This Quiz has 10 questions.</li>
    <li>Each question 10 points.</li>
    <li>You have totally 5 minutes.</li>
    <li>You have to answer every question.</li>
    <li>You can find information about javascript <a href="https://en.wikipedia.org/wiki/JavaScript">here</a>.</li>
    </ul>
    
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
