'use strict';
import { SCORE_CONTAINER_ID } from '../constants.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';

export function createScoreElement(quizData) {
  const scoreContainer = getDOMElement(SCORE_CONTAINER_ID);
  clearDOMElement(scoreContainer);

  const score = createDOMElement('h3', { id: 'user-score' });
  score.innerText = `${quizData.correctAnswers.length} correct of ${quizData.questions.length}`;

  scoreContainer.appendChild(score);
}
