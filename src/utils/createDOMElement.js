'use strict';

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add extra attributes
 *
 * @param {string|[string, Object, ...any]} element
 * @return {HTMLElement|Text}
 */
const createDOMElement = (element) => {
  if (typeof element === 'string') {
    console.log('considered a string', element);
    return document.createTextNode(element);
  }
  // create a tag and its children
  console.log(element);
  const [tag, options = {}, ...children] = element;
  const node = document.createElement(tag);
  // set the options as attributes in the new element
  Object.entries(options).forEach(([key, val]) => node.setAttribute(key, val));

  children.forEach((child) => node.appendChild(createDOMElement(child)));

  return node;
};

export default createDOMElement;

const test = createDOMElement([
  'div',
  { id: 'bubba' },
  ['h1', {}, 'What is a node'],
  [
    'ol',
    {},
    ['li', { id: 'optionA' }, 'constant, let, variable'],
    ['li', { id: 'optionB' }, 'var, const, let, function'],
    ['li', { id: 'optionC' }, 'var, let, const'],
  ],
]);
document.body.appendChild(test);
