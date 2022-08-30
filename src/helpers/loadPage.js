export const loadPage = (initPageFn, data) => {
  const { element } = initPageFn(data);
  const userInterface = document.querySelector('#root');
  userInterface.innerHTML = '';
  userInterface.appendChild(element);
};
