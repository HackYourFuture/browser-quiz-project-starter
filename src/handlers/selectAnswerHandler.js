'use strict';
import {addClass, removeClass} from "../utils/manageClass.js";
import { quizData } from '../data.js';

const selectAnswerHandler = (element) => {
  const answerKey = element.dataset.answer;
  const question = quizData.questions[quizData.currentQuestionIndex];
  question.selected = answerKey;
  const prevSelected = document.querySelector('.selected');
  if (prevSelected){
    
    removeClass(prevSelected, 'selected');
  }
  
  addClass(element, 'selected');
  
};

export default selectAnswerHandler;
