import { renderQuestions } from '../handlers/render-questions.js';
import { createQuestionList } from '../views/questions-list.js';
import { renderScore } from '../handlers/render-score.js';
window.addEventListener('DOMContentLoaded', () => {
  const ui = document.getElementById('user-interface');
  const list = createQuestionList();
  renderQuestions(ui, list);
  renderScore();
});
