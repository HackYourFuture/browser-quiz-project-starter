export const loadPage = (initPageFn, data) => {
  const pageElement = initPageFn(data);
  const userInterface = document.querySelector('#root');
  userInterface.innerHTML = '';
  userInterface.appendChild(pageElement);
};
