'use strict';

import { quizData } from './data.js';
import { router } from './router.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  quizData.wrongSum = 0;
  quizData.correctSum = 0;
  quizData.timeScore = 0;

  const questionOrResult = /question[0-9]|result/;
  const sessionKeys = Object.keys(sessionStorage);
  let sessionKey;
  
  for (const key of sessionKeys) {
    sessionKey = key.match(questionOrResult);
    if (sessionKey !== null) {
      break;
    }
  }

  sessionKey === null ? router('welcome') : router('refresh', sessionKey[0]);

  }

window.addEventListener('load', loadApp);
