import { initQuestionPage } from './initQuestionPage.js';
import { quizData } from '../data.js';

export const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  initQuestionPage();
};
