'use strict';

import { quizData } from '../../shared/data/data.js';
import { QUESTION_CONTAINER_ID } from '../../shared/data/constants.js';
import { createQuestionElement } from './questionViews.js';
import {
  clearDOMElement,
  getDOMElement,
} from '../../shared/utils/DOMElement.js';

const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};
