'use strict';
import { getDOMElement } from '../src/utils/DOMUtils.js';
/*

 The constants file is used to store anything 
 that multiple files use that should ALWAYS be the same
 
 It is an industry standard to make these variables fully capitalised to show this
*/

export const QUIZ_CONTAINER_ID = 'quiz-container';
export const QUESTION_CONTAINER_ID = 'question-container';
export const NEXT_QUESTION_BUTTON_ID = 'next-question-button';
export const QUIZ_Interface_BOX = getDOMElement('user-interface');
