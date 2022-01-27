'use strict';

export const getReferenceElement = (text, href) => {

  const element = document.createElement('li');

  element.innerHTML = String.raw`
    <a href='${href}'>${text}</a>
  `;

  return element;
}
