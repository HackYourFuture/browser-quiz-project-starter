export const setLocalStorage = (questionNum) => {
  document.querySelectorAll('li').forEach((answer) => {
    // saving selected answer to local storage
    answer.addEventListener('click', (event) => {
      localStorage.setItem(questionNum, event.target.innerText[0]);
    });
  });
};
