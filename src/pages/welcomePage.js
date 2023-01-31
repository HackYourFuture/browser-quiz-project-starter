import { USER_INTERFACE_ID, QUIZ_BUTTON_ID } from '../constants.js';
import { createQuizRulesElement } from '../views/welcomeView.js';
import { initQuizRulesPage } from '../pages/quizRulesPage.js'

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createQuizRulesElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(QUIZ_BUTTON_ID)
    .addEventListener('click', rules);
};

const rules = () => {
  initQuizRulesPage();
};
