import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { loadBackgrounds } from '../views/loadBackgrounds.js';
import { changeStoryText } from '../views/writeStory.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  changeStoryText();

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
  loadBackgrounds();
  const bar = document.querySelector('.level-bar');
  const soundOnOff = document.querySelector('.sound-on-off');
  bar.classList.add('display');
  soundOnOff.classList.add('display');
};
