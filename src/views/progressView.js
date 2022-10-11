'use strict';

import { quizData } from '../data.js';

export const createProgressElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <p>Question ${quizData.currentQuestionIndex + 1} of ${
    quizData.questions.length
  }</p>
  `;
  return element;
};
