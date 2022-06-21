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
export const createProgressElement = (
  numberOfQuestions,
  questionIndex,
  numberOfCorrects
) => {
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
  <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-solid fa-xmark" style="color:#e03131"></i></span>: ${
      questionIndex - numberOfCorrects
    }</li>
    <li><span class="fa-li"><i class="fa-solid fa-check" style="color:rgb(11, 223, 36)"></i></span>: ${numberOfCorrects}</li>
  </ul>


  
  </div>
  <div className="progress-item">
    <p id="score-text">Score</p>
    <h1 id="score">${numberOfCorrects * 10}</h1>
  </div>
</div>`;
  const progressBarInside = element.querySelector('#progress-bar-inside');
  progressBarInside.style.width = `${
    (questionIndex / numberOfQuestions) * 100
  }%`;
  return element;
};
