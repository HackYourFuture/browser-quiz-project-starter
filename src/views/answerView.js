import { createElement } from '../helpers/dom-helpers.js';

export const createAnswerView = (key, text) => {
  return createElement('li', { text: `${key}: ${text}` });
};
