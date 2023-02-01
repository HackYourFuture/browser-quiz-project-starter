import { initWelcomePage } from './welcomePage';
import { createResultsElement } from '../views/resultsView.js';
import { BACK_TO_WELCOME_PAGE_BUTTON_ID } from '../constants';

export const initResultsPage = () => {
  const resultsElement = createResultsElement();
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  userInterface.appendChild(resultsElement);

  document
    .getElementById(BACK_TO_WELCOME_PAGE_BUTTON_ID)
    .addEventListener('click', backToWelcomePage());
};

const backToWelcomePage = () => {
  initWelcomePage();
};
