import { createFinalSummaryElement } from '../views/finalSummaryView.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const finalSummaryPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalSummaryElement = createFinalSummaryElement();
  userInterface.appendChild(finalSummaryElement);
};
