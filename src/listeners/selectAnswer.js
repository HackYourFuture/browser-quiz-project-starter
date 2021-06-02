'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import selectAnswerHandler from '../handlers/selectAnswerHandler.js';
import getDOMElement from '../utils/getDOMElement.js';
/*
 * @param {MouseEvent} event
 */
const selectAnswer = (event) => {
  const status = getDOMElement(NEXT_QUESTION_BUTTON_ID).dataset.status;
  if(status === 'checkAnswer'){
    selectAnswerHandler(event.currentTarget);
  }  
};

export default selectAnswer;
