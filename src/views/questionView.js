import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { Hint_Button } from '../constants.js';
import { Hint_Text} from '../constants.js';

// Answer buttons ID & class
import { ANSWER_BUTTONS } from '../constants.js';
import { buttons } from '../constants.js';

// Score elements ID
import { SCORE_BUTTON } from '../constants.js';
import {SCORE_RESULT } from '../constants.js';
import { SCORE_ELEMENT } from '../constants.js';
import { SCORE_NUM } from '../constants.js';

// Score elements classes
import {circle} from '../constants.js';
import {score_inner} from '../constants.js';
import {score_number} from '../constants.js';
import {score_text} from '../constants.js';
import {score_circle} from '../constants.js';
import {progress_right} from '../constants.js';
import {score_progress} from '../constants.js';
import {progress_left} from '../constants.js';
import {score_progress_2} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    
    <button id="${Hint_Button}">Hint</button>
    <div id="${Hint_Text}">This is the hint message</div>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>

    <div id="${ANSWER_BUTTONS}">
    <button class="${buttons}">Answer 1</button>
    <button class="${buttons}">Answer 2</button>
    <button class="${buttons}">Answer 3</button>
    <button class="${buttons}">Answer 4</button>
</div>

<button id="${SCORE_BUTTON}">Check Score</button>
    <div id="${SCORE_RESULT}"></div>
    </div>
    <div id="${SCORE_ELEMENT}">
  
    <div class="${circle}">
     <div class="${score_inner}"></div>
      <div id="${SCORE_NUM}" class="${score_number}"></div>
       <div class="${score_text}">out of 10</div>
         <div class="${score_circle}">
           <div class="${progress_right}">
             <div class="${score_progress}"></div>
              </div>
              <div class="${progress_left}">
            <div class="${score_progress_2}"></div>
          </div>
        </div>
      </div>
   </div>
   
  `;
  
  return element;
};

