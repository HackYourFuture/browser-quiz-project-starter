import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionComponent } from '../components/questionComponent.js';
import { createAnswerComponent } from '../components/answerComponent.js';
import { questionNumberTracker } from '../components/questionNumTracker.js';
import { quizData } from '../data.js';
import { initResultPage } from './resultPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionComponent = createQuestionComponent(currentQuestion.text);
  userInterface.appendChild(questionComponent);
  const answerComponent = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerComponent(key, answerText);
    answerComponent.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  /**************************Question number tracker ************************************* */
  const questionNumberTrackerComponent = questionNumberTracker(
    currentQuestion.id,
    quizData.questions.length
  );
  userInterface.appendChild(questionNumberTrackerComponent);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initResultPage();
    return;
  }
  initQuestionPage();
};
