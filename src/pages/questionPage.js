import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionEl } from '../views/questionView.js';
import { createAnswerEl } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionEl = createQuestionEl(currentQuestion.text);
  userInterface.appendChild(questionEl);

  const answersListEl = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerEl(key, answerText);
    answerElement.addEventListener('click', () => {
      currentQuestion.selected = key;
      if (currentQuestion.selected === currentQuestion.correct) {
        answerElement.classList.add('correct');
      } else {
        answerElement.classList.add('wrong');
      }
    });
    answersListEl.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
