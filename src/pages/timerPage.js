'use strict';
//import { quizData } from "../data.js";

export const startTimer = (timeleft = 10) => {
  const start = setInterval(() => {
    if (timeleft <= 0) {
      clearInterval(start);
    }
    console.log(timeleft)
    if(timeleft > 0) {
      document.getElementById('timerId').textContent = timeleft;
    } else {
      document.getElementById('timerId').textContent = "0.0"
    }
    timeleft -= 1;
  }, 1000);
};
