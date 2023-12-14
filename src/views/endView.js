export const createEndElement = (restartCallback) => { 
  //Create a new HTML div element and with innerHTML set the congrats message and restart button
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Congratulations! You've completed the quiz!</h1>
  <p>Thank you for participating.</p>
  <button id="restart-quiz-button">Restart Quiz</button>
`;

const restartButton = element.querySelector('#restart-quiz-button');
  if (restartButton) {
    restartButton.addEventListener('click', restartCallback);
  }

  return element;
};