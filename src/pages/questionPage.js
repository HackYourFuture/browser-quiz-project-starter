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
    clearInterval(TIMER);
    currentQuestion.selected = selected;
    if (currentQuestion.correct === selected) {
      data.score++; //-y- if the user choose right option score increases
    }
    view.showAnswer(currentQuestion, data.score); //-y- data.score sended to showAnswer function
  };

  const currentQuestion = data.questions[data.currentQuestionIndex];
  const { score, currentQuestionIndex, questions } = data;
  let count = 10;
  const counterRender = () => {
    if (count > 0) {
      count--;
      view.showCount(count);
    } else {
      count = 5;
      currentQuestion.selected = 'no answer';
      view.showAnswer(currentQuestion, score);
      clearInterval(TIMER);
    }
  };
  let TIMER = setInterval(counterRender, 1000);

  const props = {
    currentQuestion,
    onNextClick,
    handleAnswer,
    score,
    currentQuestionIndex,
    questionLength: questions.length,
    count,
  }; //-y- data added to questionView. Because we want to reach data.score in questionView
  const view = createQuestionView(props);

  return view;
};
