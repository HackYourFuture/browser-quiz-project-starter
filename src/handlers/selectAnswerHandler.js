'use strict';

import { quizData } from '../data.js';

const selectAnswerHandler = (element) => {
  const answerKey = element.dataset.answer;
  const question = quizData.questions[quizData.currentQuestionIndex];
  question.selected = answerKey;
  console.log('answerKey', question.selected);
};

export default selectAnswerHandler;
