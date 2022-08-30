import { answerIsCorrect } from './answerIsCorrect.js';
import { answerIsWrong } from './answerIsWrong.js';

//y - We hold the answer data here. And send the parameters to answerIsCorrect and answerIsWrong functions

export const answerHandle = (
  key,
  answerText,
  correctAnswer,
  selectedAnswer
) => {
  console.log(key, answerText, correctAnswer, selectedAnswer);
  if (key === correctAnswer) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  preventChangeAnswer();
};
const preventChangeAnswer = () => {
  const answers = document.querySelectorAll('.answer-item');
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.add('disabled');
  }
};
