import { TIMER_COMPONENT_ID } from "../constants";

export const createTimerElement = (second) => {
    const element = document.createElement('div');
    element.id = TIMER_COMPONENT_ID;
    element.innerHTML = String.raw`
        <h1>Timer ${second} </h1>
      `;
    return element
  };