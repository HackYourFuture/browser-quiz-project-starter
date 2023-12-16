import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage, stopTimer } from './questionPage.js';
// Add stopTimer


export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

     // Calling stopTimer to ensure the timer is stopped when go back to the welcome page from restart button
    stopTimer();

    if(document.getElementById('coolBackground')){
      document.body.removeChild(document.getElementById('coolBackground'));
      videoLoaded = false;
    }
};

const startQuiz = () => {
  initQuestionPage();
//    if (document.body.style.backgroundImage) {
//  document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/7e/88/1b/7e881bf46c1270f03fd580e8ce221639.gif)';
// }
//;

};
     