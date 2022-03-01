import { createAndAppend } from '../helpers/dom-helpers.js';

export const createWelcomeView = (parent) => {
  const container = createAndAppend(parent, 'div');
  createAndAppend(container, 'h1', { text: 'Welcome' });
  const startQuizButton = createAndAppend(container, 'button', {
    text: 'Start Quiz',
  });
  return { startQuizButton };
};
