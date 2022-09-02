'use strict';

import { CURRENT_SCORE_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createScoreElement = (currentScore) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
 <p> Score : <span class='score' id='${CURRENT_SCORE_ID}'>${currentScore}</span></p>
`;

  return element;
};

export const updateScore = (finalScore) => {
  document.getElementById(CURRENT_SCORE_ID).innerText = quizData.finalScore;
};
