export const startHandler = (event) => {
  const startContainer = document.querySelector('.startContainer');
  startContainer.remove();

  const quizContainer = document.querySelector('.quizContainer');
  //debugger;
  quizContainer.classList.add('showQuiz');
};
