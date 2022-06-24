'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { ALERT_DIDNT_ANSWER } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('question');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next
    </button>
  `;

  return element;
};

export const createAlertElement = () => {
  const alert = document.createElement('div');
  alert.innerHTML = String.raw`
  <p id="${ALERT_DIDNT_ANSWER}"> are you sure that you have answerd ? </p> `;
  return alert;
};


