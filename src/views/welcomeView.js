import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome My Hobbit Friend</h1>
    <p>You will begin your journey very soon. Your will is going to determine the fate of Middle-Earth, so be careful when answering questions.</p>
    <div>
    <p>Here is your weapons:</p>
    <p><strong>click on the correct answer</strong></p>
    <p>or <strong>press the keyboard key for the correct answer </strong></p>
    </div>
    <button id="${START_QUIZ_BUTTON_ID}">Start Journey</button>
  `;
  return element;
};
