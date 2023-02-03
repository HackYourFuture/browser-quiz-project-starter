export function willBar() {
  const willPower = document.querySelector('.level');
  const borderWillPower = document.querySelector('.level-bar');
  let currentWidth = willPower.offsetWidth;
  let newWidth = currentWidth + 300 / 10;
  willPower.style.width = `${newWidth}px`;
}
