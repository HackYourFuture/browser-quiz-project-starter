import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  const image = document.createElement('img');
  element.className = 'container';
  element.innerHTML = String.raw`
  <img src="./public/wallhaven-od6z1p.jpeg" alt="">

    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz!</button>

  `;
  return element;
};
