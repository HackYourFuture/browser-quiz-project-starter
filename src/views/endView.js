export const createEndElement = () => {
  // Create a new HTML div element
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Congratulations! You've completed the quiz!</h1>
  <p>Thank you for participating.</p>
`;
  return element;
};