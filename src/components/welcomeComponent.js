import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeComponent = () => {
  const element = document.createElement('div');
  element.classList.add('card');
  element.innerHTML = String.raw`
  <img src="../public/logo.webp" alt="quiz" class='logo' />
  <h2>Welcome</h2>
  <p>
  This is Hackyourfuture's JavaScript quiz. <br />
  This is a quiz about JavaScript. <br />
  There are 10 questions. <br /><br />
  Credits: Person A (Mentor) and Person B (Student) <br />
  Good luck!</p>
  
    <button id="${START_QUIZ_BUTTON_ID}" class='start-btn'>start quiz</button>

  `;
  return element;
};
