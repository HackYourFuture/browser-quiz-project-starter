import { getTimerFromStorage } from '../lib/storage.js';

import { initResultPage } from './resultPage.js';
export const createTimePressure = () => {
  const timer = setInterval(() => {
    let target = getTimerFromStorage();
    let minute = Math.floor(target / 60);
    let second = Math.floor(target % 60);

    if (second < 10) {
      document.querySelector(
        '.progress-time-item'
      ).innerHTML = String.raw`0${minute}:0${second}`;
    } else {
      document.querySelector(
        '.progress-time-item'
      ).innerHTML = String.raw`0${minute}:${second}`;
    }
    if (target < 0) {
      clearInterval(timer);
      initResultPage();
    }
  }, 1000);
};
