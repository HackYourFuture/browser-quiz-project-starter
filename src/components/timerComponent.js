import { TIMER_COMPONENT_ID, TIMER_SECONDS } from '../constants';

let timerId = null;
export const createTimerComponent = (onFinish) => {
  const element = document.createElement('div');
  element.id = TIMER_COMPONENT_ID;
  element.className = 'timer-component';

  element.innerHTML = appendTimer(TIMER_SECONDS);
  setCounter(element, onFinish);
  return element;
};

const setCounter = (element, onFinish) => {
  let seconds = TIMER_SECONDS;

  // to clear the timer if the user clicks on the next question button
  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(() => {
    if (seconds === 0) {
      clearInterval(timerId);
      onFinish();
      return;
    }

    element.innerHTML = appendTimer(--seconds);
    console.log('seconds', seconds);
  }, 1000);
};

const appendTimer = (seconds) => {
  return String.raw`
    <h1>${seconds} </h1>
  `;
};
