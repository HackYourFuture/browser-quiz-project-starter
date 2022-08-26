import { loadPage } from '../helpers/loadPage.js';
import { createQuestionView } from '../views/questionView.js';

export const initQuestionPage = (data) => {
  const nextQuestion = () => {
    data.currentQuestionIndex += 1;
    loadPage(initQuestionPage, data);
  };

  const currentQuestion = data.questions[data.currentQuestionIndex];
  return createQuestionView(currentQuestion, nextQuestion);
};
