import { createElement } from '../helpers/dom-helpers.js';

export const createWelcomeView = () => {
  const welcomeView = createElement();
  const h1 = createElement('h1', { text: 'Welcome' });
  welcomeView.appendChild(h1);

  const startQuizBtn = createElement('button', { text: 'Start Quiz' });
  welcomeView.appendChild(startQuizBtn);

  return { welcomeView, startQuizBtn };
};
