


export const timer = document.createElement('label');
import { TIMER_Id } from '../constants.js';
timer.id = TIMER_Id;

const seconds = document.createElement('span');
timer.appendChild(seconds);
const punctuationMark = document.createElement('span');
timer.appendChild(punctuationMark);
const minutes = document.createElement('span');
timer.appendChild(minutes);
seconds.textContent = '00';
punctuationMark.textContent = ':';
minutes.textContent = '00';

