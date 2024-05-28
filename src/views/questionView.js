export const createQuestionElement = (questionText) => {
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = questionText;
  return questionElement;
};
