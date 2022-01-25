'use strict';

import { initQuestionPage } from './pages/questionPage.js';
import { welcomePage } from './pages/welcomePage.js';
import { resultPage } from './pages/resultPage.js';
import { USER_INTERFACE_ID } from './constants.js';

export const router = (page) => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';

  switch (page) {
    case 'question':
      initQuestionPage(userInterfaceElement);
      break;
    case 'welcome':
      welcomePage(userInterfaceElement);
      break;
    case 'result':
      resultPage(userInterfaceElement);
      break;
    default:
      console.log('router received wrong string');
  }
};
