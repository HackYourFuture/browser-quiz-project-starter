import { loadPage } from '../helpers/loadPage.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = (data) => {
  const onStartClick = () => loadPage(initQuestionPage, data);
  return createWelcomeElement(onStartClick);
};
