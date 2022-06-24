'use strict';

export const createResultElement = (results) => {
  const element = document.createElement('div');
  element.classList.add('container');
  element.innerHTML = String.raw`
  <h1>RESULT</h1>
  `;

  /*will add cons answers from storage*/
  results.forEach((result) => {
    const questionCard = document.createElement('div');
    questionCard.classList.add('question-card');

    questionCard.innerHTML = String.raw`
  <h2>${result.text}</h2>
  <p>Your answer:${result.answers[result.selected]} </p>
  <p>Correct answer: ${result.correct} = ${result.answers[result.correct]}</p>
  `;

    element.appendChild(questionCard);

    const newLink = document.createElement('a');
    newLink.innerHTML = String.raw`
    Read more about:
    ${result.links[result.links.text]}`;
    newLink.setAttribute('href', result.links[result.links.href]);
    questionCard.appendChild(newLink);
  });

  return element;
};
