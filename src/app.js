'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import {initBackgroundPage} from './pages/backgroundPage.js'
const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  initBackgroundPage();
  initWelcomePage();
};

window.addEventListener('load', loadApp);
window.addEventListener('resize',initBackgroundPage);