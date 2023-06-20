import { HINT_TEXT_ID ,HINT_BUTTON_ID,NEXT_QUESTION_BUTTON_ID,ANSWERS_LIST_ID } from "../constants.js";

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question,hint) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <p id=${HINT_TEXT_ID}>${hint}</p>
    <button id=${HINT_BUTTON_ID}>show hint</button>
  `;

  return element;
};
