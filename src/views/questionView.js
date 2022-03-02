import { createElement } from '../helpers/dom-helpers.js';

export const createQuestionView = (question, answerViews) => {
  const questionView = createElement();

  const h1 = createElement('h1', { text: question });
  questionView.appendChild(h1);

  const answersList = createElement('ul');
  questionView.appendChild(answersList);

  answerViews.forEach((answerView) => answersList.appendChild(answerView));

  const nextQuestionBtn = createElement('button', { text: 'Next Question' });
  questionView.appendChild(nextQuestionBtn);

  return {
    questionView,
    nextQuestionBtn,
  };
};
