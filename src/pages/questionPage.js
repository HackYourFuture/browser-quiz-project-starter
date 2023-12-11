import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const savedQuestionIndex = localStorage.getItem('currentQuestionIndex');
  
  quizData.currentQuestionIndex = savedQuestionIndex ? parseInt(savedQuestionIndex, 10) : 0;

  const currentQuestion =  quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  const questionElement = createQuestionElement(currentQuestion.text);




  
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
    score();

};

const nextQuestion = () => {
 
  if(quizData.currentQuestionIndex == quizData.questions.length - 1){
    quizData.currentQuestionIndex = 0
    localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);
    initQuestionPage();
  }else{
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);
 
  // update the score in the next element
  score();
  initQuestionPage();
}
};

export const score = () =>{
  if(quizData.questions[quizData.currentQuestionIndex].selected === quizData.questions[quizData.currentQuestionIndex].correct){
    currentScore += 1;
    localStorage.setItem(currentScore);
  }
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  
  // Retrieve the current score from local storage using a specific key
  const currentScore = localStorage.getItem('currentScore');

  // If currentScore is null, set it to 0
  const numericScore = currentScore ? parseInt(currentScore, 10) : 0;

  const topScore = quizData.questions.length;
  const scoreElement = createScoreElement(numericScore, topScore);

  // Clear the user interface before appending the score element

  userInterface.appendChild(scoreElement);

  
  
}
;

