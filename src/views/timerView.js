'use strict'

export const createTimerElement = () =>{
    const element = document.createElement('div');
    element.className = "timer";
    element.innerHTML = String.raw`
  <span class="time-text"> Time Left <span id="timerId" class="btn btn-secondary timer-sec">10</span> </span>
  `;
  element.style.pointerEvents = 'none';
  return element;
}


