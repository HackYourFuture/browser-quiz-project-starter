import { createElement } from '../helpers/dom-helpers.js';

export const createWelcomeView = () => {
  const root = createElement();
  const h1 = createElement('h1', { text: 'Welcome' });
  root.appendChild(h1);

  const startQuizBtn = createElement('button', { text: 'Start Quiz' });
  root.appendChild(startQuizBtn);

  return { root, startQuizBtn };
};
