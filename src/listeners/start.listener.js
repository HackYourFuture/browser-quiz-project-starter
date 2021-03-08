'use strict';

import { startHandler } from '../handlers/start.handler.js';

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startHandler);
