import { createCountsAnswered } from '../views/show-amounts.js';
import { createCountsCorrect } from '../views/show-amounts.js';
import { quizData } from '../data.js';

export function renderScore() {
  const qn = document.getElementById('question-number');
  const countAnswered = createCountsAnswered(quizData);
  qn.innerHTML = countAnswered;

  const cc = document.getElementById('question-correct');
  const countCorrect = createCountsCorrect(quizData);
  cc.innerHTML = countCorrect;
}

export function showCount() {
  console.log('Counting correct answers...');
  let correct = 0;
  let selected = 0;
  for (const question of quizData.questions) {
    if (question.selected !== null) {
      selected += 1;
    }
    if (question.correct === question.selected) {
      correct += 1;
    }
  }
  quizData.quiz.answered = selected;
  quizData.quiz.correct = correct;
  console.log(`${correct} correct / ${selected} answered `);
  renderScore();
}
