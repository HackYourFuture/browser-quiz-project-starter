import { createAndAppend } from '../helpers/dom-helpers.js';

export const createAnswerElement = (parent, key, text) => {
  createAndAppend(parent, 'li', { text: `${key}: ${text}` });
};
