'use strict';

import selectAnswerHandler from '../handlers/selectAnswerHandler.js';

/*
 * @param {MouseEvent} event
 */
const selectAnswer = (event) => {
  selectAnswerHandler(event.currentTarget);
};

export default selectAnswer;
