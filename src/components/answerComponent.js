let clickHandlerFunctions = new Map();

export const createAnswerComponent = (key, answerText, onSelect) => {
  const element = document.createElement('li');
  element.id = key;
  element.classList.add('options');
  element.innerHTML = String.raw`
      <input type="radio" name="answerItem" value=${key} id="${key}" />
      ${key.toUpperCase()}:  ${answerText}
  `;
  const clickHandlerFunction = clickHandler(onSelect);
  element.addEventListener('click', clickHandlerFunction);
  clickHandlerFunctions.set(element, clickHandlerFunction);
  return element;
};

const clickHandler = function (onSelect) {
  return (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSelect();
    disableClick();
  };
};

const disableClick = () => {
  const answerList = document.querySelectorAll('li');
  answerList.forEach((element) => {
    const clickHandlerFunction = clickHandlerFunctions.get(element);
    if (clickHandlerFunction) {
      element.removeEventListener('click', clickHandlerFunction);
      element.style.cssText += 'opacity: 0.7';
    }
  });
};
