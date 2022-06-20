'use strict';
import { ALPHANUMERIC_MATRIX, BACKGROUND_MATRIX_ID, 
    BACKGROUND_SPAN_MATRIX_ID_OFFSET} from '../constants.js';

export const createBackgroundPage = (NumberOfSpans)=>{
    const getRandomLetter = (NumberOfLetters = 1)=> {
        let data = [];
        let randomBrightStrip = Math.floor(NumberOfSpans);
        for (const index of Array(NumberOfLetters)){
            const randomKey = Math.floor((Math.random() * Object.keys(ALPHANUMERIC_MATRIX).length));
            const randomValue = Math.floor((Math.random() * Object.values(ALPHANUMERIC_MATRIX)[randomKey].length));
            data.push([Object.entries(ALPHANUMERIC_MATRIX)[randomKey][1][randomValue],
            Math.random()>.9 && randomBrightStrip>1? true:false
            ]);
            if (randomBrightStrip>0){
                randomBrightStrip--;
            }
        }
        return data;
    }

    const element = document.createElement('div');
    element.innerHTML = '';
    element.id = BACKGROUND_MATRIX_ID;
    const letters = getRandomLetter(NumberOfSpans);
    
    
    letters.forEach((letter,index)=>{
        const span = document.createElement('span');
        span.id = letter[1]?`${BACKGROUND_SPAN_MATRIX_ID_OFFSET}${index}`: '';
        span.textContent = letter[0];
        element.append(span);
    });
    return element;

};