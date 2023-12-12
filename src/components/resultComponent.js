export const createResultComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
	`;
  return element;
};
