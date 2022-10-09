'use strict';

import { quizData } from '../data.js';

const progressText =  document.createElement('p'); 
const progressBlock = document.createElement('div');
progressBlock.appendChild(progressText);

export const progressDiv = () => {
    progressText.textContent =`Question ${quizData.currentQuestionIndex + 1} of 10`;
    return progressBlock;
}

