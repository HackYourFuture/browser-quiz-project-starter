import { TIMER_COMPONENT_ID } from '../constants';

export const createTimerElement = (second) => {
  const element = document.createElement('div');
  element.id = TIMER_COMPONENT_ID;
  element.className = 'timer-component';
  element.innerHTML = String.raw`
        <h1>${second} </h1>
      `;
  return element;
};
