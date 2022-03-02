import { clearElement } from '../helpers/dom-helpers.js';
import { createQuestionView } from '../views/questionView.js';
import { createAnswerView } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = (appRoot) => {
  clearElement(appRoot);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const answerViews = Object.entries(
    currentQuestion.answers
  ).map(([key, answerText]) => createAnswerView(key, answerText));

  const { root, nextQuestionBtn } = createQuestionView(
    currentQuestion.text,
    answerViews
  );

  appRoot.appendChild(root);

  nextQuestionBtn.addEventListener('click', () => nextQuestion(appRoot));
};

const nextQuestion = (appRoot) => {
  quizData.currentQuestionIndex += 1;
  initQuestionPage(appRoot);
};
