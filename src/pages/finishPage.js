'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { createFinishElement } from '../views/finishView.js';
import { initWelcomePage } from './welcomePage.js';


export const initFinishPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const finishElement = createFinishElement();
  userInterface.appendChild(finishElement);
  // document.getElementById("tryAgain").addEventListener('click', tryAgain);
};
// const tryAgain = () => {
//   localStorage.clear();
//   initWelcomePage();
// }

