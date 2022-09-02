import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { createFinishElement } from '../views/finishViews.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { startQuiz } from './welcomePage.js'

export const initFinishPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const welcomeElement = createFinishElement();
    userInterface.appendChild(welcomeElement);

    document
        .getElementById(START_QUIZ_BUTTON_ID)
        .addEventListener('click', startQuiz);
};