import { checkAnswer } from './checkAnswer.js';

export const setLocalStorage = (questionNum, correctAnswer) => {
  document.querySelectorAll('li').forEach((answer) => {
    // saving selected answer to local storage
    answer.addEventListener('click', (event) => {
      localStorage.setItem(questionNum, event.target.innerText[0]);
      // checking  if the answer is correct or not
      const ansState = checkAnswer(questionNum);
      if (ansState) {
        console.log('correct');
        // remove all classes from answer list
        document.querySelectorAll('li').forEach((answer) => {
          answer.classList.remove('correct');
          answer.classList.remove('wrong');
        });
        document.getElementById(answer.id).classList.add('correct');
      } else {
        console.log('wrong');
        document.querySelectorAll('li').forEach((answer) => {
          answer.classList.remove('correct');
          answer.classList.remove('wrong');
        });
        document.getElementById(answer.id).classList.add('wrong');
        document.getElementById(correctAnswer).classList.add('correct');
      }
    });
  });
};
