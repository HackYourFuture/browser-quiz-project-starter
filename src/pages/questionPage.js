import {
  ANSWERS_LIST_ID,
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

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', selectAnswer)
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

 //Code repeat 
const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
const correctAnswerKey = currentQuestion.correct;

// Flag for not selecting two items
quizData.answerSelected = false;

const selectAnswer = (event) => {
 
  if (quizData.answerSelected) {
    return;
  }
  
    const selectedListItem = event.target;
    const userAnswer = selectedListItem.dataset.key;

    quizData.answerSelected = true;

    if (userAnswer == currentQuestion.correct) {
     selectedListItem.classList.add('yes')
    } else {
     selectedListItem.classList.add('no')
     showCorrectAnswer()
    }
};

const showCorrectAnswer = () => {
  // Code repeat
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const answerElements = answersListElement.querySelectorAll('li');

  answerElements.forEach((answerElement) => {
    const answerKey = answerElement.dataset.key;

    if (answerKey == correctAnswerKey) {
      answerElement.classList.add('yes');
    }
  });
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  quizData.answerSelected = false;

  initQuestionPage();
};
