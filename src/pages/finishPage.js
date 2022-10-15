'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { createFinishElement } from '../views/finishView.js';


export const initFinishPage = () => {
  localStorage.setItem('currentQuestionIndex', '10'); //set the index 10 in local storage after refresh page it should still finish page
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const finishElement = createFinishElement();
  userInterface.appendChild(finishElement);
  document.getElementById("tryAgain").addEventListener('click', tryAgain);
};

const tryAgain = () => { //delete local storage and start to begin with clicking button
  localStorage.clear();
  location.reload();
}

