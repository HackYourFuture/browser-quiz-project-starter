import { quizData } from '../data.js';
import { getDOMElement } from '../utils/DOMUtils.js';

const spanEl = getDOMElement('score');
spanEl.textContent = 0;

export const checkAnswer = function selectedAnswer(e) {
  const buttonsCon = this.parentElement.parentElement;
  console.log(buttonsCon);
  const answerButtons = buttonsCon.querySelectorAll("button");
  console.log(answerButtons);
  if (this.id === quizData.questions[quizData.currentQuestionIndex].correct) {
    this.classList.add('correct-answer');
    answerButtons.forEach( button => button.removeEventListener('click',checkAnswer));
    return (spanEl.textContent = parseFloat(spanEl.textContent) + 100);
  } else {
    this.classList.add('wrong-answer');
    answerButtons.forEach( button => button.removeEventListener('click',checkAnswer));
    return (spanEl.textContent = parseFloat(spanEl.textContent) - 50);
  }
};
