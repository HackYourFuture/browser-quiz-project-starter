import { quizData } from '../data.js';

export const createFinalSummaryElement = () => {
  const { finalScore, questions } = quizData;

  const element = document.createElement('div');
  element.innerHTML = `
    <h1>Congratulations ! you answered ${finalScore} from total ${questions.length} questions </h1>
  `;
  return element;
};
