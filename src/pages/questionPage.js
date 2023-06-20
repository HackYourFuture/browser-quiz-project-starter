import {
  ANSWERS_LIST_ID,
  HINT_BUTTON_ID,
  HINT_TEXT_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text,currentQuestion.hint);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
const hintText = document.getElementById(HINT_TEXT_ID)
const hintButton = document.getElementById(HINT_BUTTON_ID)
hintButton.addEventListener("click",()=>{
  if(hintText.style.opacity==0){
    hintText.style.opacity = 1
    hintButton.innerText ='hide hint'
  }
  else{
    hintText.style.opacity = 0
    hintButton.innerText ='show hint'
  }
})
console.log({hintText,hintButton  })
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
