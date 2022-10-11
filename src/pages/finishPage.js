'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { createFinishElement } from '../views/finishView.js';

export const initFinishPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finishElement = createFinishElement();
  userInterface.appendChild(finishElement);
};

