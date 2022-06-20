'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
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
export const createProgressElement = (numberOfQuestions,questionIndex, score) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
<div id="user-progress">
  <div className="progress-item"> 
    <p id="progress-text">Question ${questionIndex}/${numberOfQuestions}</p>
    <div id="progress-bar">
      <div id="progress-bar-inside">
      </div>
    </div>
  </div>
  <div className="progress-item">
    <p id="score-text">Score</p>
    <h1 id="score">${score}</h1>
  </div>
</div>`;
  const progressBarInside = element.querySelector('#progress-bar-inside');
  progressBarInside.style.width = `${questionIndex /numberOfQuestions* 100}%`;
  return element;
};
