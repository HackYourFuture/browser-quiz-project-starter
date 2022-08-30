import { answerHandle } from '../helpers/answerHandle.js';
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
  const correctAnswer = currentQuestion.correct; // y - added for handled correct answer
  const selectedAnswer = currentQuestion.selected; // y - added for handled selected answer

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerList.appendChild(answerElement);
    //y - added addEventListener to each answer element and sended key, answerText, correctAnswer and selectedAnswer parameters to answerHandle function
    //y - used arrow function in addEventListener to send parameters. If we don't use arrow function, the function will invoked when the page is loaded,
    //not when user clicks
    answerElement.addEventListener('click', () =>
      answerHandle(key, answerText, correctAnswer, selectedAnswer)
    );
    //y
  }

  element.querySelector('#btnNext').addEventListener('click', onNextClick);

  return element;
};
