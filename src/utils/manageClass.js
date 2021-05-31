
'use strict';



const addClass =  (element, className) => {
    element.classList.add(className);
}

const removeClass = (element, className) => {
    element.classList.remove(className);
}

export {addClass, removeClass};