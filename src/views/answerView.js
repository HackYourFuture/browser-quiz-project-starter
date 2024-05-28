export const createAnswerElement = (key, answerText, isSelected = false) => {
  const element = document.createElement('li');
  element.classList.add('answer-choice'); // Add a class for styling
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;

  if (isSelected) {
    element.classList.add('selected'); // Add 'selected' class when selected
  }

  element.addEventListener('click', () => {
    // Get all answer choices
    const answerChoices = document.querySelectorAll('.answer-choice');

    // Deselect all answer choices
    answerChoices.forEach(choice => choice.classList.remove('selected'));

    // Select the clicked element
    element.classList.add('selected');

    // You can add additional actions here, like updating quiz data or displaying feedback
  });

  return element;
};
