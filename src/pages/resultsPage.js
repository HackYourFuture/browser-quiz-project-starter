import { USER_INTERFACE_ID } from '../constants.js';
import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { createResultsElement } from '../views/resultsView.js';
import { changeStoryText } from '../views/writeStory.js';

export const initResultsPage = function () {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultsElement();
  userInterface.appendChild(resultElement);

  changeStoryText();

  const restartButton = document.getElementById(RESTART_QUIZ_BUTTON_ID);
  restartButton.addEventListener('click', () => {
    location.reload();
  });
};
