import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initQuestionPage, nextQuestion } from '../pages/questionPage.js';
import { loadBackgrounds } from './loadBackgrounds.js';

export function timerSecond() {
  let seconds = 90;
  let el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;
    el.innerText;

    if (seconds === 0) {
      clearInterval(intervalId);
      // noTimeToAnswer(seconds);
    }
  }
  let intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  let el = document.querySelector('.seconds-counter');
  el.remove();
  // let noTime = document.querySelector('.no-time');
  // if (noTime) noTime.remove();
}

// function noTimeToAnswer(seconds) {
//   if (seconds === 0) {
//     const noTime = document.createElement('div');
//     noTime.className = '.no-time';
//     document.body.append(noTime);
//     noTime.innerHTML = String.raw`
//     <h1>You have no time</h1>

//     <button id="ozgur">
//       Next
//     </button>
//   `;
//   }
// }
