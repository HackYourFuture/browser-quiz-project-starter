import { quizData } from '../data.js';
import { updateRealScore } from '../handlers/realScore.handler.js';

export const selectingHandler = (event) => {
  const answerButtons = document.querySelectorAll('.answerButtons button');

  for (let i = 0; i < answerButtons.length; i++) {
    if (
      answerButtons[i].getAttribute('data-key') ===
      answerButtons[i].getAttribute('data-correct')
    ) {
      answerButtons[i].classList.add('btn-success');
    } else {
      answerButtons[i].classList.add('btn-danger');
    }

    answerButtons[i].disabled = true;
  }

  if (
    event.target.getAttribute('data-key') ===
    event.target.getAttribute('data-correct')
  ) {
    quizData.quiz.correct++;
  } else {
    quizData.quiz.wrong++;
  }
  quizData.quiz.answered++;
  updateRealScore();
};
