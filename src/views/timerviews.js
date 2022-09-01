import { TIMER_Id } from '../constants.js';

export const createTimerElement = () => {

    const timer = document.createElement('label');
    timer.id = TIMER_Id;

    const seconds = document.createElement('span');
    seconds.id = 'seconds'
    timer.appendChild(seconds);
    const punctuationMark = document.createElement('span');
    timer.appendChild(punctuationMark);
    const minutes = document.createElement('span');
    minutes.id = 'minutes'
    timer.appendChild(minutes);
    seconds.textContent = '00';
    punctuationMark.textContent = ':';
    minutes.textContent = '00';

    return timer;


}
