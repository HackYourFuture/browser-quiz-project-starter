// I continue to work on this file

import { quizData } from '../data.js';

const sumOfRightAnswers = quizData.questions.reduce((rightAnswers,question) => {

  return question.selected === question.correct ? rightAnswers += 1 : rightAnswers;

  },0)