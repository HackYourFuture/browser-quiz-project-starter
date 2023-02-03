let counter = 0;
const soundOnOff = function () {
  let backgroundSound = document.querySelector('#background-music');
  counter++;
  if (counter % 2 === 1) backgroundSound.volume = 0;
  else if (counter % 2 === 0) backgroundSound.volume = 1.0;
};

export function interactionWithSound() {
  let soundButton = document.querySelector('.sound-on-off');
  if (soundButton) soundButton.addEventListener('click', soundOnOff);
}
