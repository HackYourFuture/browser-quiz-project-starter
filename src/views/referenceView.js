'use strict';

export const createReferenceElement = (text, href) => {
  const element = document.createElement('li');

  element.innerHTML = String.raw`
    <a href='${href}'>${text}</a>
  `;

  return element;
};
