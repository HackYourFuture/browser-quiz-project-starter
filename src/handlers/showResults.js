'use strict';

import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';
import createResultsDOM from '../views/createResultsDOM.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createResetButton from '../views/createResetButton.js';

const showResults = () => {
  const userInterface = getDOMElement('user-interface');
  clearDOMElement(userInterface);
  const resultContainer = createResultsDOM(quizData);
  userInterface.appendChild(resultContainer);
  const resetButton = createResetButton();
  userInterface.appendChild(resetButton);
};

export default showResults;
