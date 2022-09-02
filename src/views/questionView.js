'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SKIP_QUESTION_BUTTON_ID } from '../constants.js'
import { FINISH_QUIZ_BUTTON_ID } from '../constants.js'

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, current, good, bad, skip) => {
  const element = document.createElement('div');
  element.style.width = '60rem';
  element.style.height = '40rem';
  element.style.position = 'relative';

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML += String.raw`
      <br>
      <p>${current}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${good}</p>
      <hr>
      <p>${bad}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${skip}</p>
      <hr>
      <h1>${question}</h1>
      <ul id="${ANSWERS_LIST_ID}"></ul>
      <hr>
      <button id="${NEXT_QUESTION_BUTTON_ID}">Next question</button>
      <button id="${SKIP_QUESTION_BUTTON_ID}">Skip question</button>
      <button id="${FINISH_QUIZ_BUTTON_ID}">Finish</button>`;
  return element;
};
