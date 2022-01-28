'use strict';

import { createResultElement } from '../views/resultView.js';

export const resultPage = (userInterface) => {
  const resultElement = createResultElement();
  userInterface.appendChild(resultElement);
};
