'use strict';

import handleInitializer from '../handlers/handleInitializer.js';

const startQuiz = (event) => {
  const buttonElement = event.currentTarget;
  handleInitializer(buttonElement);
};

export default startQuiz;
