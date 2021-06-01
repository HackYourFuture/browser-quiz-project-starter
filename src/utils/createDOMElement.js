'use strict';

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 */
const createDOMElement = (tag, options) => {
  const { id } = options || {};
  const { className } = options || {};
  const element = document.createElement(tag);

  if (id != null && id != undefined) {
    element.id = id;
  }
  if (className != null && className != undefined) {
    element.className = className;
  }

  return element;
};

export default createDOMElement;
