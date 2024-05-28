import { quizData } from '../data.js';
import { initQuestionPage } from './initQuestionPage.js';

export const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.score = 0;
  initQuestionPage();
};
