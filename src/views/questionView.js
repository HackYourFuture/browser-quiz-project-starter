import { ANSWERS_LIST_ID, HINT_TEXT_ID,HINT_BUTTON_ID,NEXT_QUESTION_BUTTON_ID, IMG_ID, BUTTON_CONTAINER_ID } from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (hint,img) => {
  const element = document.createElement('div');
element.id='question-container'
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div id="img-container">
  <img src=${img} alt="movie" id="${IMG_ID}"></img>
  </div>
  <ul id="${ANSWERS_LIST_ID}">
  </ul>
  <p id="${HINT_TEXT_ID}">${hint}</p>
  <div id="${BUTTON_CONTAINER_ID}">
  <button id="${HINT_BUTTON_ID}">show hint</button>
  <button id="${NEXT_QUESTION_BUTTON_ID}">
  Next question
  </button>
  </div>
  `;
  
  return element;
};
