import { renderQuestions } from '../handlers/render-questions.js';
import { createQuestionList } from '../views/questions-list.js';
import { displayQuestion } from '../views/questions-list.js';
import { renderScore } from '../handlers/render-score.js';
import { showCount } from '../handlers/render-score.js';
import { startGame } from '../handlers/startGame.js';
import { setNextQuestion } from '../handlers/setNextQuestion.js';
import { quizData } from '../data.js';

window.addEventListener('DOMContentLoaded', () => {
  renderScore();
  document.getElementById('a').addEventListener('click', () => {
    if (quizData.questions[0].selected !== null) {
      return;
    }
    quizData.questions[0].selected = 'a';
    showCount();
  });
  document.getElementById('b').addEventListener('click', () => {
    if (quizData.questions[0].selected !== null) {
      return;
    }
    quizData.questions[0].selected = 'b';
    showCount();
  });
  document.getElementById('c').addEventListener('click', () => {
    if (quizData.questions[0].selected !== null) {
      return;
    }
    quizData.questions[0].selected = 'c';
    showCount();
  });
  document.getElementById('d').addEventListener('click', () => {
    if (quizData.questions[0].selected !== null) {
      return;
    }
    quizData.questions[0].selected = 'd';
    showCount();
  });
});

window.addEventListener('DomContentLoaded', displayQuestion);

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', setNextQuestion);
