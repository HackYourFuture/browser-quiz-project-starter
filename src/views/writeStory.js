import { dataStory } from '../dataTheme.js';
import { sumOfRightAnswers } from './resultsView.js';

export function changeStoryText() {
  let totalCorrectAnswers = sumOfRightAnswers();
  if (dataStory.currentStoryIndex > 10 && totalCorrectAnswers < 7) {
    dataStory.currentStoryIndex++;
  }
  const storyDiv = document.getElementById('story-div');
  storyDiv.innerText = `${dataStory.stories[dataStory.currentStoryIndex].text}`;
  dataStory.currentStoryIndex++;
}
