import { createAndAppend } from '../helpers/dom-helpers.js';

export const createAnswerView = (parent, key, text) => {
  createAndAppend(parent, 'li', { text: `${key}: ${text}` });
};
