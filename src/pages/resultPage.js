'use strict';

import { quizData } from '../data.js';
import { createResultElement } from '../views/resultView.js';
import { getReferenceElement } from '../views/referenceView.js';
import { REFERENCE_LIST_ID } from '../constants.js';

export const resultPage = (userInterface) => {
    const resultElement = createResultElement();
    userInterface.appendChild(resultElement);

};
