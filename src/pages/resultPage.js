'use strict';

import { createResultElement } from '../views/resultView.js';
import { createReferenceElement } from '../views/referenceView.js';
import { quizData } from '../data.js';

export const resultPage = (userInterface, refresh = '') => {
  
  let resultElement;
  
  if (refresh === 'result') {
    resultElement = createResultElement(sessionStorage.correctSum, sessionStorage.wrongSum);
  } else {
    resultElement = createResultElement(quizData.correctSum, quizData.wrongSum);
    sessionStorage.setItem('result', 'true');
    sessionStorage.setItem('correctSum', `${quizData.correctSum}`);
    sessionStorage.setItem('wrongSum', `${quizData.wrongSum}`);
    }

    userInterface.appendChild(resultElement);

    const referenceListElement = document.getElementById(REFERENCE_LIST_ID);

    for (const {links} of quizData.questions) {
      for (const link of links) {
          const referenceElement = createReferenceElement(link.text, link.href);
          referenceListElement.appendChild(referenceElement);  
        }
        
      }
};
