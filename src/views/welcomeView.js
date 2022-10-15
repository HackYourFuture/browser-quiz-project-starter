'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => { //create welcome page content
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome to Space Dive! </h1>
    <button class="btn btn-success btn-lg" id="${START_QUIZ_BUTTON_ID}">Start Diving</button>
  `;
  element.classList.add("startDiv");
  return element;
};
