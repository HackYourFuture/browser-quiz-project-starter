'use strict';

let start = null;

export const startTimer = (timeleft = 10) => {
  start = setInterval(() => {
    if (timeleft <= 0) {
      clearInterval(start);
      document.getElementById('timerId').textContent = '0.0';
    } else if (timeleft > 0) {
      document.getElementById('timerId').textContent = timeleft;
    }

    timeleft -= 1;
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(start);
};
