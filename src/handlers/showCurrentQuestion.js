'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import createQuestionElement from '../views/createQuestionElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import { quizData } from '../data.js';

// TODO: Add handler to answers
const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionDOM = createQuestionElement(
    currentQuestion,
    quizData.selectedQuestionsIndex.length
  );
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export default showCurrentQuestion;
