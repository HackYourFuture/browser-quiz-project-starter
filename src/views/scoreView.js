'use strict';

import { CURRENT_SCORE_ID } from '../constants.js';
import { quizData } from '../data.js';



export const createScoreElement = (currentScore) => {
  const element = document.createElement('div');
  element.className = "score";

 

  element.innerHTML = String.raw`
 <p> Score : <span id='${CURRENT_SCORE_ID}'>${currentScore}</span></p>
`;

  return element;
};