'use strict';

import handleInitializer from '../handlers/handleInitializer.js';


const initializeQuiz = () => {
  handleInitializer();
};
  

window.addEventListener('load', initializeQuiz);
