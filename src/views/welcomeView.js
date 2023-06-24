import { START_QUIZ_BUTTON_ID } from '../constants.js';


/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div class="welcome-container">
  <div class="welcome-text" data-msg="Welcome&nbsp;to our game!">
    <div class="text--content">
      <div class="text--data">Welcome&nbsp;to our game!</div>
    </div>
  </div>
  <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  <br>
</div>
    
  `;
  return element;
};
