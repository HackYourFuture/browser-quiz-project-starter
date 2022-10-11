import { quizData } from '../data.js';

export const createFinalSummaryElement = () => {
  const { finalScore, questions } = quizData;

  const element = document.createElement('div');
  element.innerHTML = `
      <h1 class='final'>Congratulations ! You answered ${finalScore} correct from  ${questions.length} questions!</h1>`;
  return element;
};
