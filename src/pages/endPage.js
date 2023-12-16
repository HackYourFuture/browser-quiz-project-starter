import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createEndElement } from '../views/endView.js';
import { initWelcomePage } from './welcomePage.js';
import { stopTimer } from './questionPage.js';
import { quizData } from '../data.js';


export const initEndPage = () => {

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

 //restartQuiz function as a callback to createEndElement
  const endElement = createEndElement(restartQuiz);
  userInterface.appendChild(endElement);

  // Call stopTimer to make the timer stopped on the end page
    stopTimer();
};

// Callback function to restart the quiz
const restartQuiz = () => {
  // Resetting quiz data
  quizData.currentQuestionIndex = 0;
  quizData.quizCompleted = false;
  quizData.userScore = 0; // Reset userScore to 0   

  
  console.log('Restarting the quiz...');
  initWelcomePage(); // Go back to the welcome page
};

