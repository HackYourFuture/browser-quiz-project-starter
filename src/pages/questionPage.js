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
    if (currentQuestion.correct === selected) {
      data.score++; //-y- if the user choose right option score increases
    }
    view.showAnswer(currentQuestion, data.score); //-y- data.score sended to showAnswer function
  };

  const currentQuestion = data.questions[data.currentQuestionIndex];

  const props = {
    currentQuestion,
    onNextClick,
    handleAnswer,
    score: data.score,
    currentQuestionIndex: data.currentQuestionIndex,
    questionLength: data.questions.length,
  }; //-y- data added to questionView. Because we want to reach data.score in questionView
  const view = createQuestionView(props);

  return view;
};
