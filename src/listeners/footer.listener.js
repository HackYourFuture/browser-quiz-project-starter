'use strict';

import { footerHandler } from '../handlers/footer.handler.js';
export const addFooterListener = () => {
  const nextButton = document.querySelector('#nextButton');
  nextButton.addEventListener('click', footerHandler);
  const prevButton = document.querySelector('#prevButton');
  prevButton.addEventListener('click', footerHandler);
};
