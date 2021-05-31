'use strict';
import createDOMElement from '../utils/createDOMElement.js';

const createResultsDOM = (data) => {
  const resultContainer = createDOMElement('div');
  const totalScoreElement = createDOMElement('p');
  totalScoreElement.innerText = `Your score was ${data.correctAnswerScore} out of ${data.questions.length}`;
  resultContainer.appendChild(totalScoreElement);
  data.questions.forEach((question, index) => {
    const questionContainer = createDOMElement('div');
    const userAnswer = createDOMElement('p');
    const correctAnswer = createDOMElement('p');
    const questionNum = createDOMElement('h2');
    questionNum.innerText = `Question ${index + 1}: ${question.text}`;
    userAnswer.innerText = `Your answer was (${question.selected}): ${
      question.answers[question.selected]
    }`;
    correctAnswer.innerText = `The correct answer is (${question.correct}): ${
      question.answers[question.correct]
    }`;
    questionContainer.appendChild(questionNum);
    questionContainer.appendChild(userAnswer);
    questionContainer.appendChild(correctAnswer);
    resultContainer.appendChild(questionContainer);
  });
  return resultContainer;
};

export default createResultsDOM;
