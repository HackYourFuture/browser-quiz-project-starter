import { quizData } from '../data.js';

export function createCounts() {
  const counts = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = `Answered questions: ${quizData.quiz.answered}. Correct answers: ${quizData.quiz.correct}.`;
  counts.appendChild(p);
  return counts;
}
