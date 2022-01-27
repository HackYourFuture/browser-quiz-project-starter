'use strict';

import { quizData } from '../data.js';
import { createResultElement } from '../views/resultView.js';
import { getReferenceElement } from '../views/referenceView.js';
import { REFERENCE_LIST_ID } from '../constants.js';

export const resultPage = (userInterface) => {
    const resultElement = createResultElement();
    userInterface.appendChild(resultElement);

    const referenceListElement = document.getElementById(REFERENCE_LIST_ID);

    for (const {links} of quizData.questions) {
      for (const link of links) {
          const referenceElement = getReferenceElement(link.text, link.href);
          referenceListElement.appendChild(referenceElement);  
        }
        
      }
};
