import { setStatusClass } from '../views/set-status.js';
import { renderScore } from '../handlers/render-score.js';
import { quizData } from '../data.js';

export function selectAnswer(event) {
  const selectedButton = event.target;
  for (const question of quizData.questions) {
    if (question.text === selectedButton.dataset.question) {
      if (question.selected !== null) {
        //if some answer was clicked already
        return;
      }
      question.selected = selectedButton.dataset.answerKey;
    }
  }

  if (selectedButton.dataset.correct === selectedButton.dataset.answerKey) {
    quizData.quiz.correct += 1;
  }
  quizData.quiz.answered += 1;

  const answerButton = document.getElementById('answer-buttons').children;
  for (const button of [...answerButton]) {
    setStatusClass(button, button.dataset.correct === button.dataset.answerKey);
  }

  const nextButton = document.getElementById('next-btn');
  nextButton.classList.remove('hide');
  renderScore();
}
