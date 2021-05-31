'use strict';

import selectAnswerHandler from '../handlers/selectAnswerHandler.js';

/*
 * @param {MouseEvent} event
 */
const selectAnswer = (event) => {
  const element = event.currentTarget;
  selectAnswerHandler(element);
};

export default selectAnswer;
