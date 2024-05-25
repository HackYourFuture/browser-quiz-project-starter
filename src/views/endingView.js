import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createEnding = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>It's the end of the quiz</h1>
    <button id="${START_QUIZ_BUTTON_ID}">Restart Quiz</button>
  `;
  return element;
};
