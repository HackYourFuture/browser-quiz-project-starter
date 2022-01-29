'use strict';

import { REFERENCE_LIST_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createResultElement = (correctSum, wrongSum) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
        <h1>Congratulations!</h1>
        <p>You have finished the quiz about JavaScript.</p>
        <p>Correct answers: ${correctSum}</p>
        <p>Wrong answers: ${wrongSum}</p>
        <p>For more about JavaScript, visit:</p>
        <ol id="${REFERENCE_LIST_ID}"></ol>
    `;
  return element;
};
