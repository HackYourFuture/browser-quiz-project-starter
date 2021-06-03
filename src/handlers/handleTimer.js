'use strict';

import { NEXT_QUESTION_BUTTON_ID, TIMER_ID } from "../constants.js";
import getDOMElement from "../utils/getDOMElement.js";
import handleCheckTheAnswer from "./handleCheckTheAnswer.js";

let timerInterval = null;
const handleTimer = (isSet) => {
    
    
    clearInterval(timerInterval);
    if(isSet){
        const timerContainer = getDOMElement(TIMER_ID);
        let counter = 15;
        timerContainer.innerText = `Time left: ${counter} seconds`;
        timerInterval = setInterval(function(){
            counter--;
            timerContainer.innerText = `Time left: ${counter} seconds`;
            
            if (counter == 0){
                clearInterval(timerInterval);
                handleCheckTheAnswer(getDOMElement(NEXT_QUESTION_BUTTON_ID));
            }
        }, 1000);
    }
    
    
}

export default handleTimer;