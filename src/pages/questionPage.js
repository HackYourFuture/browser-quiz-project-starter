import { loadPage } from '../helpers/loadPage.js';
import { createQuestionView } from '../views/questionView.js';
import { initResultPage } from './resultPage.js';

const handleAnswer = (currentQuestion, selected) => {
  currentQuestion.selected = selected;
  console.log({ currentQuestion });
};

export const initQuestionPage = (data) => {
  const nextQuestion = () => {
    if (data.currentQuestionIndex === data.questions.length - 1) {
      loadPage(initResultPage, data);
    } else {
      data.currentQuestionIndex += 1;
      loadPage(initQuestionPage, data);
    }
  };

  const currentQuestion = data.questions[data.currentQuestionIndex];
  const { element } = createQuestionView(
    currentQuestion,
    nextQuestion,
    handleAnswer
  );

  return { element };
};
