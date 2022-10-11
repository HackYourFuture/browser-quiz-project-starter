'use strict';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createFinishElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Result: .../10</h1>
    <img style="width: 200px;" src="./public/images/false.gif" alt="">
    <img style="width: 200px;" src="./public/images/true.gif" alt="">
    `;
  element.classList.add("startDiv");
  return element;
};
