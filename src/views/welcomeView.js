import {
  START_QUIZ_BUTTON_ID,
  WELCOME_OUTER_DİV,
  WELCOME_H1,
  QUIZ_RULES_LIST,
  INPUT_NAME,
  BOTTOM_DIV,
} from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

// We can use the same idea.
export const createWelcomeElement = () => {
  const outerDiv = document.createElement('div');
  outerDiv.setAttribute('id', WELCOME_OUTER_DİV);

  const h1 = document.createElement('h1');
  h1.setAttribute('id', WELCOME_H1);
  outerDiv.appendChild(h1);
  h1.textContent = 'Hello';
  const h4 = document.createElement('h4');
  h4.setAttribute('id', QUIZ_RULES_LIST);
  outerDiv.appendChild(h4);
  h4.textContent =
    '1- We will ask you 10 questions.\r\n 2- You need to answer all questions. \r\n 3- Your results will be shown at the end of the quiz\r\n 4- If you answer all question correctly, you will win a coupon to come to moon with us.  \r\n5- The person who will go to the moon with us will be determined by lot';
  const bottomDiv = document.createElement('div');
  bottomDiv.setAttribute('id', BOTTOM_DIV);
  outerDiv.appendChild(bottomDiv);
  const inputName = document.createElement('input');
  inputName.setAttribute('id', INPUT_NAME);
  inputName.placeholder = 'Enter your name';
  bottomDiv.appendChild(inputName);
  const button = document.createElement('button');
  button.setAttribute('id', START_QUIZ_BUTTON_ID);
  //const buttonImage =
  button.textContent = 'Start Quiz';
  bottomDiv.appendChild(button);

  // outerDiv.innerHTML = String.raw`
  //   <h1>Welcome</h1>
  //  <p>selam</p>
  //   <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  // `;
  return outerDiv;
};
