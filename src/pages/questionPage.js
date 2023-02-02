import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { checker } from '../views/checker.js';
import { initResultsPage } from './resultsPage.js';
import { timerSecond } from '../timer.js';
import { counterQuestion } from '../questionRow.js';
import { removeElement } from '../timer.js';
import { loadBackgrounds } from '../views/loadBackgrounds.js';

export const initQuestionPage = () => {
  timerSecond();
  counterQuestion();
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

  checker();

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      nextQuestion();
      removeElement();
      loadBackgrounds();
    });
};

export const nextQuestion = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length - 1)
    initResultsPage();
  else {
    quizData.currentQuestionIndex++;
    initQuestionPage();
  }
};
