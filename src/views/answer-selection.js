import { quizData } from '../data.js';
import { getDOMElement } from '../utils/DOMUtils.js';

const spanEl = getDOMElement('score');
console.log(spanEl);
spanEl.textContent = 0;

export const checkAnswer = function selectedAnswer(e) {
  if (this.id === quizData.questions[quizData.currentQuestionIndex].correct) {
    this.classList.add('correct-answer');

    return (spanEl.textContent = parseFloat(spanEl.textContent) + 100);
  } else {
    this.classList.add('wrong-answer');

    return (spanEl.textContent = parseFloat(spanEl.textContent) - 50);
  }
};
