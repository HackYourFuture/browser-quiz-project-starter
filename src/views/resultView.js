'use strict';

export const createResultElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`<p>This is the result page!</p>`;
    return element;
}
