export const findElementsWithIds = (element) => {
  const elements = element.querySelectorAll('[id]');
  const ui = {};
  Array.from(elements).forEach((element) => {
    ui[element.id] = element;
  });
  return ui;
};
