import { clearElement } from '../helpers/dom-helpers.js';
import { createQuestionView } from '../views/questionView.js';
import { createAnswerView } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const root = document.getElementById('root');
  clearElement(root);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const { answersList, nextQuestionButton } = createQuestionView(
    root,
    currentQuestion.text
  );

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    createAnswerView(answersList, key, answerText);
  }

  nextQuestionButton.addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex += 1;
  initQuestionPage();
};
