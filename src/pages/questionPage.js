import { clearElement } from '../helpers/dom-helpers.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById('root');
  clearElement(userInterface);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const { answersList, nextQuestionButton } = createQuestionElement(
    userInterface,
    currentQuestion.text
  );

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    createAnswerElement(answersList, key, answerText);
  }

  nextQuestionButton.addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex += 1;
  initQuestionPage();
};
