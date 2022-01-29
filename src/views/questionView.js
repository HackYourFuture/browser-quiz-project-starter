'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { GET_RESULT_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { TIMER_ELEMENT_ID } from '../constants.js';
import { REFERENCE_LIST_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const getQuestionElement = (question, isLast) => {
  const element = document.createElement('div');
  element.id = "question-interface"
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div id="hud">
  <div id="hud-item">
     <p class="hud-prefix"> Question </p>
     <h2 class="hud-main-text" > ${quizData.currentQuestionIndex}/10</h2>
  </div>
  <div id="hud-item">
     <p class="hud-prefix"> Timer </p>
     <h2 id="${TIMER_ELEMENT_ID}" class="hud-main-text" ></h2>
  </div>
  
  
 <div id="hud-item">
  <p class="hud-prefix">Score</p>
  <h2 class="hud-main-text" >${quizData.correctSum}/10</h>
 </div>
 <div id="hud-item">
 <p class="hud-prefix">Time Score</p>
 <h2 class="hud-main-text" >${quizData.timeScore}</h>
 </div>

 </div>
  
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}"></ul>
    <p>Need more resources?</p>
    <ol id="${REFERENCE_LIST_ID}"></ol>

    <button class="next-question-btn" id="${
      isLast ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID
    }">
      ${isLast ? 'Get result' : 'Next question'}
    </button>
  `;

  return element;
};
