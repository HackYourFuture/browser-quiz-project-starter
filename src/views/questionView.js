'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

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
  element.classList.add('user-progress');
  element.innerHTML = String.raw`
  <div className="progress-item"> 
    <h2 id="progress-text">Question ${questionIndex}/${numberOfQuestions}</h2>
    <div id="progress-bar">
      <div id="progress-bar-inside">
      </div>
    </div>
  </div>
  <div className="progress-item">
  <ul class="fa-ul">
    <li><span class="fa-li"><i class="fa-solid fa-xmark" style="color:#e03131"></i></span>: ${
      questionIndex - numberOfCorrects-1
    }</li>
    <li><span class="fa-li"><i class="fa-solid fa-check" style="color:rgb(11, 223, 36)"></i></span>: ${numberOfCorrects}</li>
  </ul>


  
  </div>
  <div className="progress-item">
    <h2 id="score-text">Score</h2>
    <h2 id="score">${numberOfCorrects * 10}</h2>
  </div>`;
  const progressBarInside = element.querySelector('#progress-bar-inside');
  progressBarInside.style.width = `${
    (questionIndex / numberOfQuestions) * 100
  }%`;
  return element;
};
