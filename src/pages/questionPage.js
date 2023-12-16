import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionComponent } from '../components/questionComponent.js';
import { createAnswerComponent } from '../components/answerComponent.js';
import { questionNumberTracker } from '../components/questionNumTracker.js';
import { createTimerComponent } from '../components/timerComponent.js';
import { quizData } from '../data.js';
import { initResultPage } from './resultPage.js';
import { setLocalStorage } from '../utils/setLocalStorage.js';
import { checkAnswer } from '../utils/checkAnswer.js';
import { disableBtn, enableBtn } from '../utils/enableAndDisableBtn.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionComponent = createQuestionComponent(currentQuestion.text);
  userInterface.appendChild(questionComponent);
  const answerComponent = document.getElementById(ANSWERS_LIST_ID);

  /**************************create  Answers*************************************
   * save the selected answer to local storage
   * check if the answer is correct
   * enable the next question button
   *************************************************************************** */

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerComponent(key, answerText, () => {
      currentQuestion.selected = key;
      setLocalStorage(
        quizData.currentQuestionIndex,
        currentQuestion.selected,
        checkAnswer
      );
      enableBtn(NEXT_QUESTION_BUTTON_ID);
    });
    answerComponent.appendChild(answerElement);
  }

  /************************** Timer ************************************* */
  const timerElement = createTimerComponent(nextQuestion);
  questionComponent.appendChild(timerElement);

  /**************************Next Question ************************************* */
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  /**************************Disable Next Question Button ************************************* */
  disableBtn(NEXT_QUESTION_BUTTON_ID);

  /**************************Question number tracker ************************************* */
  const questionNumberTrackerComponent = questionNumberTracker(
    currentQuestion.id,
    quizData.questions.length
  );
  userInterface.appendChild(questionNumberTrackerComponent);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initResultPage();

    return;
  }
  initQuestionPage();
};
