import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { PROGRESS_BAR_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, questionCounter) => {
  const element = document.createElement('div'); 

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h3>Q:${questionCounter}/10</h3>  
    <div class="progress-container">
    <div id="${PROGRESS_BAR_ID}"></div>
    </div>
    <h1>${question}</h1>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;


  return element;
};