import { quizData } from './data.js';
import { initQuestionPage, nextQuestion } from './pages/questionPage.js';
import { loadBackgrounds } from './views/loadBackgrounds.js';

export function timerSecond() {
  let seconds = 91;
  let el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;
    el.innerText;

    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }
  let intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  let el = document.querySelector('.seconds-counter');
  el.remove();
}

// export function noTimeToAnswer() {
//   let el = document.querySelector('.seconds-counter');
//   if (el.innerText === '0') {
//     nextQuestion();
//     removeElement();
//     loadBackgrounds();
//   }
// }
