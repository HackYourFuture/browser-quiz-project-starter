export function clearClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

export function setClass(element, correct) {
  clearClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}
