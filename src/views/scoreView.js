'use strict';

import { CURRENT_SCORE_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createScoreElement = () => {
  const element = document.createElement('div');
  element.classList.add('header')
  element.innerHTML = String.raw`
  <span class="score-box"> SCORE: <span class="score" id="${CURRENT_SCORE_ID}"> ${quizData.finalScore} </span> </span>
  `;
  element.style.pointerEvents = 'none';
  return element;
};

export const updateScore = () => {
  document.getElementById(CURRENT_SCORE_ID).innerText = quizData.finalScore;
}
