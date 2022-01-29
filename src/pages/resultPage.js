'use strict';

import { quizData } from '../data.js';
import { createResultElement } from '../views/resultView.js';
import { getReferenceElement } from '../views/referenceView.js';
import { REFERENCE_LIST_ID } from '../constants.js';

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
          const referenceElement = getReferenceElement(link.text, link.href);
          referenceListElement.appendChild(referenceElement);  
        }
        
      }
};
