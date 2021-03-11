import { createCountsAnswered } from '../views/show-amounts.js';
import { createCountsCorrect } from '../views/show-amounts.js';
import { quizData } from '../data.js';

export function renderScore() {
  const qn = document.getElementById('question-number');
  qn.classList.remove('hide');
  const countAnswered = createCountsAnswered(quizData);
  qn.innerHTML = countAnswered;

  const cc = document.getElementById('question-correct');
  cc.classList.remove('hide');
  const countCorrect = createCountsCorrect(quizData);
  cc.innerHTML = countCorrect;
}
