'use strict';


import {ACTIVE_BUTTON_ANIMATION} from '../constants.js'

export const setButtonActive = (buttonId, pasFunction)=>{
    const button = document.getElementById(buttonId);
    button.style.animation = ACTIVE_BUTTON_ANIMATION;
    button.style.animationDuration = '3s';
    button.style.animationDirection = 'normal';
    button.style.animationIterationCount = '1';
    button.style.animationTimingFunction = 'ease-in-out';
    button.addEventListener('animationend',pasFunction);
};
