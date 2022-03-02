export const createElement = (tagName = 'div', options = {}) => {
  const elem = document.createElement(tagName);

  // `text` is not a regular attribute but must be set via `.textContent`
  const { text, ...rest } = options;

  // set regular attributes
  for (const [name, value] of Object.entries(rest)) {
    elem.setAttribute(name, value);
  }

  // set text (if any) using `.textContent`
  if (text) {
    elem.textContent = text;
  }

  return elem;
};

export const clearElement = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};
