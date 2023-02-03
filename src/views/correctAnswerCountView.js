import { CORRECT_ANSWER_RATE_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createCorrectAnswerViewElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <p id="${CORRECT_ANSWER_RATE_ID}" class="correct-answer-count"></p>
  `;
  return element;
};
