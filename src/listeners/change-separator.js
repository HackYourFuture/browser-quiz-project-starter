'use strict';
/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */

 import { changeSeparatorHandler } from '../handlers/change-separator.js';
document
  .getElementById('separator-input')
  .addEventListener('keyup', changeSeparatorHandler);
