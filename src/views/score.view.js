import { successPercentage } from '../logic/passScore.logic.js';
export const scoreView = (quiz) => {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quizContainer', 'showQuiz');

  const quizHeader = document.createElement('h3');
  quizHeader.innerText = 'Summary';
  quizContainer.appendChild(quizHeader);

  const summaryText = document.createElement('div');
  summaryText.classList.add('question', 'm-5');
  summaryText.innerText =
    'Your score is ' +
    quiz.correct +
    '\n You answered ' +
    quiz.answered +
    ' questions';
  quizContainer.appendChild(summaryText);

  const passScore = successPercentage();
  const icon = document.createElement('i');

  if (quiz.correct > passScore) {
    icon.classList.add('fas', 'fa-check', 'checkIcon');
  } else {
    icon.classList.add('fas', 'fa-times', 'failedIcon');
  }
  quizContainer.appendChild(icon);
  document.body.appendChild(quizContainer);
};
