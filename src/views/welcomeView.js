'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome To JS Strijders Quiz App</h1>
    <img src="public/Assets/Add a heading.png" alt="ninja warrior">
    <button class ="btn" id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
    `;
  return element;
};
