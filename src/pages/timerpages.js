import {} from '../views/timerviews.js'

let totalSeconds = 0;
let timerIntervalId = 0;

export function setTime(start) {
    if (start) {
      timerIntervalId = setInterval(increaseTimer, 1000);
    } else if (timerIntervalId) {
      clearInterval(timerIntervalId);
      timerIntervalId = 0;
    }
  }
  function increaseTimer() {
    ++totalSeconds;
    minutes.innerHTML = pad(totalSeconds % 60);
    seconds.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  function pad(val) {
    let valString = val + '';
    if (valString.length < 2) {
      return '0' + valString;
    } else {
      return valString;
    }
  }
  