import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createEndElement } from '../views/endView.js';


export const initEndPage = () => {

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const endElement = createEndElement(); //This function is responsible for creating the message of the end page
  userInterface.appendChild(endElement);
};

//Converted to the same codes from welcomePage :)