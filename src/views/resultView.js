'use strict';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultElement = (results) => {
  const element = document.createElement('div');
  element.classList.add('container');

  results.forEach((result) => {
    const questionCard = document.createElement('div');
    questionCard.classList.add('question-card');

    questionCard.innerHTML = String.raw`
  <h2>${result.text}</h2>
  <p>Your answer:${result.answers[result.selected]} </p>
  <p>Correct answer: ${result.answers[result.correct]}</p>
  `;

    element.appendChild(questionCard);

    const newLink = document.createElement('a');
    newLink.innerHTML = String.raw`
     ${result.links[result.links.text]}`;
    const hrefLink = result.links[result.links.href];
    newLink.setAttribute('href', hrefLink);
    questionCard.appendChild(a);
  });

  return element;
};
