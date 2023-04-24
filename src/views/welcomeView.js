import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <label for="name" class="name-label">Enter your name:</label>
    <input type="text" id="name" name="name" required class="name-input">
    <button id="${START_QUIZ_BUTTON_ID}" class="button-style">start quiz</button>
  `;
  
  return element;
};
