'use strict';

import { initQuestionPage } from './pages/questionPage.js';
import { welcomePage } from './pages/welcomePage.js';
import { resultPage } from './pages/resultPage.js';
import { USER_INTERFACE_ID } from './constants.js';

export const router = (page, sessionKey = '') => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';

  switch (page) {
    case 'refresh':
      sessionKey === 'result'
      ? resultPage(userInterfaceElement, sessionKey)
      : initQuestionPage(userInterfaceElement, sessionKey);
      break;
    case 'question':
      initQuestionPage(userInterfaceElement);
      break;
    case 'welcome':
      welcomePage(userInterfaceElement);
      break;
    case 'result':
      resultPage(userInterfaceElement);
      break;
  }
};
