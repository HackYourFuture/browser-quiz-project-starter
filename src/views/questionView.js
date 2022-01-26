'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { GET_RESULT_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const getQuestionElement = (question, isLast) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}"></ul>

    <button class="next-question-btn" id="${isLast ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID}">
      ${isLast ? 'Get result' : 'Next question'}
    </button>
  `;

  return element;
};
