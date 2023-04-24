import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { changeProgress } from '../views/progressBar.js';


export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];


  const questionElement = createQuestionElement(currentQuestion.text, quizData.currentQuestionIndex + 1);

  correctAnswerKey = currentQuestion.correct;
  

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', selectAnswer)
  }

// this code disabled and active button
  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .setAttribute('disabled', true)

  // Add event listener to the button
  document

  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .removeAttribute('disabled')

  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .addEventListener('click', nextQuestion);

  const currentBar = changeProgress((quizData.currentQuestionIndex * 10)+10); // Progressbar line

    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
  
  // Flag for not selecting two items
  quizData.answerSelected = false;
};

let correctAnswerKey;

const selectAnswer = (event) => {
  if (quizData.answerSelected) {
    return;
  }
  
    const selectedListItem = event.target;
    const userAnswer = selectedListItem.dataset.key;

    quizData.answerSelected = true;

    if (userAnswer === correctAnswerKey) {
     selectedListItem.classList.add('yes')
    } else {
     selectedListItem.classList.add('no')
     showCorrectAnswer()
    }
};

const showCorrectAnswer = () => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const answerElements = answersListElement.querySelectorAll('li');

  answerElements.forEach((answerElement) => {
    const answerKey = answerElement.dataset.key;

    if (answerKey === correctAnswerKey) {
      answerElement.classList.add('yes');
    }
  });

};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};