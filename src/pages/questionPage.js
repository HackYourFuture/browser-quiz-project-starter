import { loadPage } from '../helpers/loadPage.js';
import { createQuestionView } from '../views/questionView.js';
import { initResultPage } from './resultPage.js';

export const initQuestionPage = (data) => {
  const onNextClick = () => {
    if (data.currentQuestionIndex === data.questions.length - 1) {
      loadPage(initResultPage, data);
    } else {
      data.currentQuestionIndex += 1;
      loadPage(initQuestionPage, data);
    }
  };

  const handleAnswer = (currentQuestion, selected) => {
    currentQuestion.selected = selected;
    console.log({ currentQuestion });
    view.showAnswer(currentQuestion);
  };

  const currentQuestion = data.questions[data.currentQuestionIndex];

  const props = { currentQuestion, onNextClick, handleAnswer };
  const view = createQuestionView(props);

  return view;
};
