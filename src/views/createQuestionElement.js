'use strict';

import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';

export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);
  const answerContainer = createDOMElement('ol');
  let clickCounter = 0;

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(answerKey, question.answers[answerKey]);

    answer.addEventListener('click', (e) => {
      const score = createDOMElement('h3', { id: 'user-score' });
      clickCounter++;

      if (
        e.target.dataset.answerItemKey == question.correct &&
        clickCounter == 1
      ) {
        e.target.classList.add('correct');
        quizData.correctAnswers.push(question);
      } else if (
        e.target.dataset.answerItemKey != question.correct &&
        clickCounter == 1
      ) {
        quizData.wrongAnswers.push(question);
        e.target.parentElement.childNodes.forEach((item) => {
          if (item.dataset.answerItemKey == question.correct) {
            item.classList.add('correct');
          } else {
            e.target.classList.add('wrong');
          }
        });
      } else {
        title.innerText = 'Click next Button';
        title.style.color = 'red';
        title.style.width = '800px';
      }
      score.innerText = `${quizData.correctAnswers.length} correct of ${quizData.questions.length}`;
      const scores = document.querySelectorAll('#user-score');
      scores.forEach((item, i, items) => {
        if (i < items.length) {
          item.remove();
        }
      });
      document.body.appendChild(score);
    });
    answerContainer.appendChild(answer);
  }

  container.appendChild(answerContainer);
  return container;
};
export const createAnswerElement = (answerKey, answerText) => {
  const answerElement = createDOMElement('li', { className: 'btn' });
  answerElement.innerText = answerText;
  answerElement.dataset.answerItemKey = answerKey;
  answerElement.classList.add('answersStyle');
  return answerElement;
};

export default createQuestionElement;
