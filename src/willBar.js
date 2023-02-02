export function willBar() {
  const willPower = document.querySelector('.level');
  const borderWillPower = document.querySelector('.level-bar');
  let currentWidth = willPower.offsetWidth;
  let newWidth = currentWidth + borderWillPower.clientWidth / 10;
  willPower.style.width = `${newWidth}px`;
}
