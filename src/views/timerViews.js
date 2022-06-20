export let timer = document.createElement('label')
timer.id = 'timer'
let seconds = document.createElement('span')
timer.appendChild(seconds)
let punctuationMark = document.createElement('span')
timer.appendChild(punctuationMark)
let minutes = document.createElement('span')
timer.appendChild(minutes)
seconds.textContent = '00';
punctuationMark.textContent = ':'
minutes.textContent = '00';
let totalSeconds = 0;
let timerIntervalId = 0;
export function setTime(start) {
    if (start) {

        timerIntervalId=setInterval(increaseTimer, 1000);
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
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}