'use strict';
import {STACK_FONT_SIZE_CSS_VAR, BACKGROUND_UNDERLAY_ID,
    UPDATE_MATRIX_INTERVAL_TIME, PRIMARY_COLOR_CSS_VAR, ACCENT_COLOR_CSS_VAR} from "../constants.js";
import { createBackgroundPage } from "../views/backgroundView.js";

let intervalId =0;

export const initBackgroundPage = ()=>{
    const currentTextSize = window.getComputedStyle(document.querySelector(':root'))
    .getPropertyValue(STACK_FONT_SIZE_CSS_VAR).trim().replace('px','');
    const matrixFactor = Math.floor((window.outerWidth/Number(currentTextSize))/10);
    const numberOfSpansX = Math.floor(window.outerWidth/Number(currentTextSize)) * (matrixFactor<7? 7:matrixFactor);
    const numberOfSpansY = Math.floor(window.outerHeight/Number(currentTextSize)) * (matrixFactor<7? 7:matrixFactor);
    
    let gradientDegree =0;
    const primaryColor = window.getComputedStyle(document.querySelector(':root')).
    getPropertyValue(PRIMARY_COLOR_CSS_VAR);
    const accentColor = window.getComputedStyle(document.querySelector(':root')).
    getPropertyValue(ACCENT_COLOR_CSS_VAR);
    const updateMatrix = ()=>{
        const backgroundUnderlay = createBackgroundPage(numberOfSpansX + numberOfSpansY);
        document.getElementById(BACKGROUND_UNDERLAY_ID).innerHTML = String.raw``;
        document.getElementById(BACKGROUND_UNDERLAY_ID).append(backgroundUnderlay);
        
        backgroundUnderlay.parentElement.style.backgroundImage = 
        `linear-gradient(${gradientDegree}deg, ${primaryColor}, ${accentColor}`;
        gradientDegree+=5;
        if (gradientDegree>359){
            gradientDegree =0;
        }
    }
    if (intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(updateMatrix, UPDATE_MATRIX_INTERVAL_TIME);
    
};