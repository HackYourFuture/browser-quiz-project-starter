'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (currentQuestion) => {
  const element = document.createElement('div');
  element.classList.add("context");
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`

    <h1>${currentQuestion.text}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div class='nextButtonDiv'>
      <button class="btn btn-success" id="${NEXT_QUESTION_BUTTON_ID}">
        Next question
      </button>
    </div>
    <div class="progress">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${(quizData.currentQuestionIndex + 1) * 10}%;" aria-valuenow="10" aria-valuemin="0"
      aria-valuemax="100"/>
      <span class="progress-number">${quizData.currentQuestionIndex + 1} /10</span>
  </div>
   
  `;

  return element;
};
