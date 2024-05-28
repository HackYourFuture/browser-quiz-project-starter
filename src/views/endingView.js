import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { SCORE_ID } from '../constants.js';
export const createEnding = (score) => {
  const endingElement = document.createElement('div');
  endingElement.textContent = `Quiz finished! Your score is: ${score}`;
  return endingElement;
};
