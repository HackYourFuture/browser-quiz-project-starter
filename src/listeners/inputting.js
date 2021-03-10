'use strict';

/**
 * @name user input
 * calls the reverseHandler when a user types in the input field
 */
 import { artifyHandler } from '../handlers/artify.js';
document.getElementById('input').addEventListener('keyup', artifyHandler);
