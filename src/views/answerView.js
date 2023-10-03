import { ANSWER_OPTION_BUTTON_ID } from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');

  element.innerHTML = String.raw`
  <button id="${ANSWER_OPTION_BUTTON_ID}-${key}">${key}: ${answerText}</button>
  `;
  return element;
};
