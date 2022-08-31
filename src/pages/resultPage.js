import { loadPage } from '../helpers/loadPage.js';
import { createResultView } from '../views/resultView.js';
import { initWelcomePage } from './welcomePage.js';

export const initResultPage = (data) => {
  const onRestartClick = () => loadPage(initWelcomePage, data);
  return createResultView(onRestartClick, data);
};
