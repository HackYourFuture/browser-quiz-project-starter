'use strict';

import { quizData } from '../data.js';


export const progressDiv = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <p>Question ${quizData.currentQuestionIndex + 1} of 10</p>
  `;
    return element;
}

