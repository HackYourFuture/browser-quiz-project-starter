import { createAndAppend } from '../helpers/dom-helpers.js';

export const createQuestionElement = (parent, question) => {
  const container = createAndAppend(parent, 'div');
  createAndAppend(container, 'h1', { text: question });
  const answersList = createAndAppend(container, 'ul');
  const nextQuestionButton = createAndAppend(container, 'button', {
    text: 'Next Question',
  });

  return {
    answersList,
    nextQuestionButton,
  };
};
