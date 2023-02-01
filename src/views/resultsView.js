/**
 * Create a full result element
 * @returns {Element}
 */

import { quizData } from '../data.js';

export const createResultsElement = () => {
  const element = document.createElement('div');

  const sumOfRightAnswers = quizData.questions.reduce(
    (rightAnswers, question) => {
      return question.selected === question.correct
        ? (rightAnswers += 1)
        : rightAnswers;
    },
    0
  );
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>Results</h1>
    <p>Your rating is ${sumOfRightAnswers} out of 10 </p>
  `;

  return element;
};
