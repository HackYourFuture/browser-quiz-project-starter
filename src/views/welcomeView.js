import { QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createQuizRulesElement = () => {
  const element = document.createElement('div');
  
  element.className = 'container';
  element.innerHTML = String.raw`
  <img src="./public/wallhaven-od6z1p.jpeg" alt="">

    <h1>Welcome</h1>
    <button id="${ QUIZ_BUTTON_ID }">Rules</button>

  `;
  return element;
};
