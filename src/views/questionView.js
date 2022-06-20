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
export const createProgressElement = (questionIndex, score) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
<div id="userProgress">
  <div className="progressItem"> 
    <p id="progressText">Question ${questionIndex}/10</p>
    <div id="progressBar">
      <div id="progressBarInside">
      </div>
    </div>
  </div>
  <div className="progressItem">
    <p id="scoreText">Score</p>
    <h1 id="score">${score}</h1>
  </div>
</div>`;
  const progressBarInside = element.querySelector('#progressBarInside');
  progressBarInside.style.width = `${questionIndex * 10}%`;
  return element;
};
