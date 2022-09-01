import { loadPage } from '../helpers/loadPage.js';
import { createWelcomeView } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = (data) => {
  data.score = 0; //- y - score equilazed to zero
  data.currentQuestionIndex = 0;
  const onStartClick = () => loadPage(initQuestionPage, data);
  const props = { onStartClick };
  return createWelcomeView(props);
};
