import { USER_INTERFACE_ID } from '../constants.js';
import { createResultElement } from '../components/resultView.js';

export const initResultPage = () => {
  const element = document.getElementById(USER_INTERFACE_ID);
  element.innerHTML = ``;
  const resultElement = createResultElement();
  element.appendChild(resultElement);

  return element;
};
