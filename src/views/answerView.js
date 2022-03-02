import { createElement } from '../helpers/dom-helpers.js';

export const createAnswerView = (key, text) => {
  const root = createElement('li', { text: `${key}: ${text}` });
  return { root };
};
