import {
  NEXT_QUESTION_BUTTON_ID,
  // ANSWER_OPTION_BUTTON_ID,
  ANSWERS_LIST_ID,
  SKIP_QUESTION_BUTTON_ID,
  SCORE_ID,
  TIMER_ID,
} from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <p id="${TIMER_ID}">
    GO
  </p>
    <ul id="${ANSWERS_LIST_ID}">
    </ul> 
    <button id="${SKIP_QUESTION_BUTTON_ID}">
    Skip question
  </button>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <p id="${SCORE_ID}">
    SCORE: ${quizData.score}
  </p>
  `;

  return element;
};
