import { ANSWERS_LIST_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionEl = (question) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
