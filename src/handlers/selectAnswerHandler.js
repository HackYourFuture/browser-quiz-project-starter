'use strict';
import {addClass, removeClass} from "../utils/manageClass.js";


const selectAnswerHandler = (element) => {
  
  const prevSelected = document.querySelector('.selected');
  if (prevSelected){
    
    removeClass(prevSelected, 'selected');
  }
  
  addClass(element, 'selected');
  
};

export default selectAnswerHandler;
