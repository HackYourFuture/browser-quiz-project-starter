// I continue to work on this file
import { USER_INTERFACE_ID } from '../constants.js';
import { createResultsElement } from '../views/resultsView.js';

export const initResultsPage = function () {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultsElement();
  userInterface.appendChild(resultElement);
};
