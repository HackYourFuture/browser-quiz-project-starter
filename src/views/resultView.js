'use strict';

export const createResultElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`<h1>This is the result page</h1>`;
    return element;
}
