'use strict';

import { CURRENT_SCORE_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createScoreElement = () => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
 <p> Score : <span class='score' id='${CURRENT_SCORE_ID}'>${quizData.finalScore}</span></p>
`;

  return element;
};

export const updateScore = () => {
  document.getElementById(CURRENT_SCORE_ID).innerText = quizData.finalScore;
};
