import { quizData } from '../data.js';
import { playSound } from './playSound.js';

export const checker = function () {
  const answers = document.querySelectorAll('li');
  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;

  const correctAnswerListItem = [...answers].filter(
    (answer) => answer.dataset.key === correctAnswer
  )[0];

  const clickChecker = function () {
    answers.forEach((answer) =>
      answer.addEventListener('click', (e) => {
        if (!quizData.questions[quizData.currentQuestionIndex].selected) {
          const clickedAnswer = e.target.dataset.key;
          quizData.questions[
            quizData.currentQuestionIndex
          ].selected = clickedAnswer;

          if (correctAnswer === clickedAnswer) {
            e.target.style.background = 'var(--color7)';
          } else {
            e.target.style.background = 'var(--color6)';
            correctAnswerListItem.style.background = 'var(--color7)';
          }
          playSound();
        }
      })
    );
  };

  const keydownChecker = function () {
    window.addEventListener('keydown', (e) => {
      if (!quizData.questions[quizData.currentQuestionIndex].selected) {
        if (e.key === 'a' || e.key === 'b' || e.key === 'c' || e.key === 'd') {
          quizData.questions[quizData.currentQuestionIndex].selected = e.key;
          if (e.key === correctAnswer) {
            document.body.style.background = 'green';
          } else {
            document.body.style.background = 'red';
          }
          playSound();
        }
      }
    });
  };
  clickChecker();
  keydownChecker();
};
