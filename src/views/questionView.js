import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createQuestionElement = (question) => {
    const element = document.createElement('div');

    //============================
    //Add a video background 
    //<video autoplay loop> 
    //<source src=.. type=..> </vid>
    const videoBG = document.createElement('video'); //<video>
    videoBG.setAttribute('autoplay', true);
    videoBG.setAttribute('loop', true);

    const vidSource = document.createElement('source');
    vidSource.setAttribute('src', '/assets/neon-light.mp4');
    vidSource.setAttribute('type', 'video/mp4');

    videoBG.appendChild(vidSource);
    document.body.appendChild(videoBG);
    //================================

    // I use String.raw just to get fancy colors for the HTML in VS Code. 
    //Added id in h1, class in ul
    element.innerHTML = String.raw` 
    <h1 id='questionHeader'>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}"> 
    </ul>  

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

    return element;
};



