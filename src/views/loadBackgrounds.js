import { quizData } from '../data.js';

const backgroundImages = [
  '01-hobbiton.jpg',
  '02-bree.jpg',
  '03-rivendell.jpg',
  '04-moria-gate.jpg',
  '05-moria-balrog.jpg',
  '06-lothlorien.jpg',
  '07-argonath.jpg',
  '08-dead-marshes.jpg',
  '09-shelob.jpg',
  '10-mount-doom-frodo.jpg',
];
const backgroundMusics = [
  '01-hobbiton.m4a',
  '02-bree.m4a',
  '03-rivendell.m4a',
  '04-moria-gate.m4a',
  '05-moria-balrog.m4a',
  '06-lothlorien.m4a',
  '07-argonath.m4a',
  '08-dead-marshes.m4a',
  '09-shelob.m4a',
  '10-mount-doom.m4a',
];

export const loadBackgrounds = function () {
  let currentIndex = quizData.currentQuestionIndex;
  const body = document.querySelector('body');
  body.style.background = `url(../images/background-img/${backgroundImages[currentIndex]}) no-repeat center center/cover`;

  let backgroundAudio = document.querySelector('#background-music');
  backgroundAudio.src = `../sounds/background-sounds/${backgroundMusics[currentIndex]}`;
  backgroundAudio.play();
};
