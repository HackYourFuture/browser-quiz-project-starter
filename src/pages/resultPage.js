import { USER_INTERFACE_ID } from '../constants.js';
import { createResultComponent } from '../components/resultComponent.js';

export const initResultPage = () => {
  const element = document.getElementById(USER_INTERFACE_ID);
  element.innerHTML = ``;
  const resultElement = createResultComponent();
  element.appendChild(resultElement);


  return element;
};


