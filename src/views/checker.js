import { quizData } from '../data.js';
import { playSound } from './playSound.js';

export const checker = function () {
  let answers = document.querySelectorAll('li');
  let correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;

  let [correctAnswerListItem] = [...answers].filter(
    (answer) => answer.dataset.key === correctAnswer
  );

  const willPower = document.querySelector('.level');
  const borderWillPower = document.querySelector('.level-bar');

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
            let currentWidth = willPower.offsetWidth;
            let newWidth = currentWidth + borderWillPower.clientWidth / 10;
            willPower.style.width = `${newWidth}px`;
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

          // update information function changes the old closure information.
          function updateInformation() {
            answers = document.querySelectorAll('li');
            correctAnswer =
              quizData.questions[quizData.currentQuestionIndex].correct;
            [correctAnswerListItem] = [...answers].filter(
              (answer) => answer.dataset.key === correctAnswer
            );
          }

          updateInformation();

          if (e.key === correctAnswer) {
            correctAnswerListItem.style.background = 'var(--color7)';
          } else if (e.key !== correctAnswer) {
            const wrongAnswerListItem = document.querySelector(
              `li[data-key="${e.key}"]`
            );

            wrongAnswerListItem.style.background = 'var(--color6)';
            correctAnswerListItem.style.background = 'var(--color7)';
          }
          playSound();
        }
      }
    });
  };
  clickChecker();
  keydownChecker();
};
