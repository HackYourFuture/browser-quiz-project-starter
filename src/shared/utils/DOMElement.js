'use strict';
/**
 * Utilities for manipulating the DOM
 */

export const getDOMElement = (id) => {
  return document.getElementById(id);
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 */
export const createDOMElement = (tag, options) => {
  const { id } = options || {};

  const element = document.createElement(tag);

  if (id != null) {
    element.id = id;
  }

  return element;
};

/**
 * This function removes all the html inside the given element
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};
