export const selectAnswerVariant = (selectedElement, rightAnswer) => {
  if (selectedElement === rightAnswer) {
    selectedElement.classList.add('selected-green');
  } else {
    selectedElement.classList.add('selected-red');
    rightAnswer.classList.add('border');
  }
};
