'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.id = "welcome-interface"
  element.innerHTML = String.raw`
    <h1>Welcome To JS Strijders Quiz App</h1>
    <div>
    <div class="instruction">
    <h3>User Guide</h3>
    <ul>
    <li>You have 1min to answer each Question</li>
    
    <li>In case of answering in below 30 Seconds you get an extra 'time Score'</li>
    
    <li>Feel confused? check the resources of each question to study more</li>
    
    <li>You can check your final Score at the result page</li>
    </ul>
    </div>
    <div class="img-container">
    <img src="public/Assets/Add a heading.png" alt="ninja warrior">
    </div>
    </div>
    <button class ="btn" id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
    `;
  return element;
};
