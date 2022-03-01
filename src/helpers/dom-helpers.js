export function createAndAppend(parent, tagName = 'div', options = {}) {
  console.assert(parent instanceof HTMLElement);

  const elem = document.createElement(tagName);

  // `text` is not a regular attribute but must be set via `.textContent`
  const { text, ...rest } = options;

  // set proper attributes
  for (const [name, value] of Object.entries(rest)) {
    elem.setAttribute(name, value);
  }

  // set text (if any) using `.textContent`
  if (text) {
    elem.textContent = text;
  }

  parent.appendChild(elem);
  return elem;
}

export function clearElement(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}
