import { createElement } from '../helpers/dom-helpers.js';

export const createQuestionView = (question, answerViews) => {
  const root = createElement();

  const h1 = createElement('h1', { text: question });
  root.appendChild(h1);

  const answersList = createElement('ul');
  root.appendChild(answersList);

  answerViews.forEach((answerView) => answersList.appendChild(answerView.root));

  const nextQuestionBtn = createElement('button', { text: 'Next Question' });
  root.appendChild(nextQuestionBtn);

  return {
    root,
    nextQuestionBtn,
  };
};
