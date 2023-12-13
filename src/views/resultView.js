import { RETRY_BUTTON_ID } from '../constants';

export const createResultElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
    <button id="${RETRY_BUTTON_ID}">RESTART</button>
	`;
  return element;
};
