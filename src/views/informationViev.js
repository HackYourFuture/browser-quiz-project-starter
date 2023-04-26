import { quizData } from '../data.js';
import { ANSWERS_LIST_ID } from '../constants.js';

export const showInformation = () => {
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  
    const questionTexts = quizData.questions.map(question => question.text).join(' ');
   
    const informationView = document.createElement('div');
  
       informationView.innerText = `${questionTexts}`;
       answersListElement.appendChild(informationView);
  }
