import { TIMER_ELEMENT_ID } from '../constants.JS';

export const setTimer = () => {
  //const startMinutes = 1;
  let time = 60;
  const timer = document.getElementById(TIMER_ELEMENT_ID);

  setInterval(updateTimer, 1000);

  function updateTimer() {
    let minutes = '00' ;
    let seconds = time ;

    seconds = seconds < 10 ? '0' + seconds : seconds;

     seconds > 0
      ? (timer.innerHTML = `${minutes}:${seconds}`)
      : (timer.innerHTML = '00:00');
    time--;
  }
};
