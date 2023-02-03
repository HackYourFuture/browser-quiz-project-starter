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
  }

  function answerSelection(answer) {
    let theAnswer = [];
    if (answer.target.tagName === 'LI') {
      const userAnswer = answer.target.id;

      theAnswer[quizData.currentQuestionIndex] =
        currentQuestion.answers[userAnswer];
      if (userAnswer === currentQuestion.correct) {
        console.log('true');
        answer.target.style.backgroundColor = 'green';
      } else {
        console.log(false);

        answer.target.style.backgroundColor = 'red';
      }
    }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};
document
  .getElementById(ANSWERS_LIST_ID)
  .addEventListener('click', answerSelection);

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
