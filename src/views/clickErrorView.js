'use strict';

export const createErrorElement = (isLast) => {
  
  const element = document.createElement('p');

  element.innerHTML = String.raw`
    To see ${
      isLast ? 'the result' : 'the next Q'
    }, please first select an answer for this ${isLast ? 'last Q' : 'one'}.
    `;

  return element;
};
