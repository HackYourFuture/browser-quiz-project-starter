import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  document.title = 'Singularity';

  initWelcomePage();
};

function setFavicons(favImg){
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('/public/images/3285297-andromeda-astronomy-cosmos-galaxy-space-spiral-universe_106791.png');

window.addEventListener('load', loadApp);
