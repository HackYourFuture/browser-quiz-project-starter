'use strict';

import { initWelcomePage } from './pages/welcomePage.js';
import { createTimerElement } from './views/timerViews.js'

const body = document.body;
export const time = createTimerElement();
time.style.position = 'absolute';
time.style.top = '6%';
time.style.left = '49.3%';
time.hidden = true;
body.appendChild(time);

const loadApp = () => {
  initWelcomePage();
};

window.addEventListener('load', loadApp);