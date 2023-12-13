import { RETRY_BUTTON_ID } from "../constants";

export const createResultComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
    <button id="${RETRY_BUTTON_ID}">RETRY</button>
	`;
  return element;
};
