export const createResultComponent = () => {
  const element = document.createElement('div');
  element.classList.add('container');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
	`;
  return element;
};
