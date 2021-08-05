import { quizData } from '../data.js';
import { getDOMElement } from '../utils/DOMUtils.js';

const spanEl = getDOMElement('score');
spanEl.textContent = 0;

export const checkAnswer = function selectedAnswer(e) {
  const buttonsCon = this.parentElement.parentElement;
  const answerButtons = buttonsCon.querySelectorAll("button");
  if (this.id === quizData.questions[quizData.currentQuestionIndex].correct) {
    this.classList.add('correct-answer');
    answerButtons.forEach( button => button.removeEventListener('click',checkAnswer));
    return (spanEl.textContent = parseFloat(spanEl.textContent) + 100);
  } else {
    this.classList.add('wrong-answer');
    const correct = quizData.questions[quizData.currentQuestionIndex].correct;

    /* forEach button if it's id = the correct answer letter (ex: "c") it give correct-answer class to the button
    and in all situations it removes the Event listener.*/

    answerButtons.forEach(element => element.id == correct ? element.classList.add("correct-answer") && element.removeEventListener('click',checkAnswer): element.removeEventListener('click',checkAnswer) );
    return (spanEl.textContent = parseFloat(spanEl.textContent) - 50);
  }
};
