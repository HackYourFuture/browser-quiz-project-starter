import { TIMER_ELEMENT_ID } from '../constants.JS';

export const setTimer = () => {
  const startMinutes = 1;
  let time = startMinutes * 60;
  const timer = document.getElementById(TIMER_ELEMENT_ID);

  setInterval(updateTimer, 1000);

  function updateTimer() {
    let minutes = '0' + Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    minutes >= 0 && seconds >= 0
      ? (timer.innerHTML = `${minutes}:${seconds}`)
      : (timer.innerHTML = '00:00');
    time--;
  }
};
