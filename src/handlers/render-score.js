import { createCounts } from '../views/show-amounts.js';
import { quizData } from '../data.js';

export function renderScore() {
  const ui = document.getElementById('user-interface');
  const count = createCounts(quizData);
  ui.appendChild(count);
}
