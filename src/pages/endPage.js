import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createEndElement } from '../views/endView.js';
import { initWelcomePage } from './welcomePage.js';


export const initEndPage = () => {

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

 //restartQuiz function as a callback to createEndElement
  const endElement = createEndElement(restartQuiz);
  userInterface.appendChild(endElement);
};

// Callback function to restart the quiz
const restartQuiz = () => {
  // Resetting quiz data
  quizData.currentQuestionIndex = 0;
  quizData.quizCompleted = false;
  console.log('Restarting the quiz...');
  initWelcomePage(); // Go back to the welcome page
};