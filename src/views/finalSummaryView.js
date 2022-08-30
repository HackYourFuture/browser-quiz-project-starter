
import { quizData } from "../data.js";

export const createFinalSummaryElement = () => {
  const { currentQuestionIndex, correctAnswers, questions } = quizData

  if (currentQuestionIndex === questions.length - 2) {
    //suppose to be `questions.length - 1` but I can not change currentQuestionIndex manually 
    //and there is no logic to increase it yet so I made questions.length - 2 to see the output on screen

    const element = document.createElement('div');
    element.innerHTML = `
    <h1>Congratulations ! you answered ${correctAnswers} from total ${questions.length} questions </h1>
  `;
    return element;
  }

}

//