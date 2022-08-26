import { createAnswerElement } from './answerView.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionView = (currentQuestion, onNextClick) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${currentQuestion.text}</h1>

    <ul id="answerList">
    </ul>

    <button id="btnNext">
      Next question
    </button>
  `;

  const answerList = element.querySelector('#answerList');

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerList.appendChild(answerElement);
  }

  element.querySelector('#btnNext').addEventListener('click', onNextClick);

  return element;
};
