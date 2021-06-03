'use strict';

import initializeLandingPage from '../handlers/initializeLandingPage.js';

const initializeQuiz = () => {
  initializeLandingPage();
};

window.addEventListener('load', initializeQuiz);
