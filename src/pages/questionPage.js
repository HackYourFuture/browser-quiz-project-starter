import { clearElement } from '../helpers/dom-helpers.js';
import { createQuestionView } from '../views/questionView.js';
import { createAnswerView } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById('user-interface');
  clearElement(userInterface);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const answerViews = Object.entries(
    currentQuestion.answers
  ).map(([key, answerText]) => createAnswerView(key, answerText));

  const { questionView, nextQuestionBtn } = createQuestionView(
    currentQuestion.text,
    answerViews
  );

  userInterface.appendChild(questionView);

  nextQuestionBtn.addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex += 1;
  initQuestionPage();
};
