import { sumOfRightAnswers } from './resultsView.js';
import { backgroundImages, backgroundMusics } from '../dataTheme.js';

let currentIndex = 0;

export const loadBackgrounds = function () {
  let totalRightAnswers = sumOfRightAnswers();
  if (currentIndex > 9 && totalRightAnswers < 7) {
    currentIndex++;
  }

  const body = document.querySelector('body');
  body.style.background = `url(../images/background-img/${backgroundImages[currentIndex]}) no-repeat center center/cover`;

  const backgroundAudio = document.querySelector('#background-music');
  backgroundAudio.src = `../sounds/background-sounds/${backgroundMusics[currentIndex]}`;
  backgroundAudio.play();

  currentIndex++;
};
