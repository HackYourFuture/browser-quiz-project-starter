import {
  ANSWERS_LIST_ID,
  QUESTION,
  NEXT_QUESTION_BUTTON_ID,
  ANSWERS_LIST,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionComponent = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1 class = ${QUESTION}>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}" class=${ANSWERS_LIST}>
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
