import { quizData } from '../data.js';
import { answerElements } from '../pages/questionPage.js';

export const selectAnswerVariant = (selectedElement) => {
    const index = quizData.currentQuestionIndex;
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;
    const answers = currentQuestion.answers;
    console.log(answers);

    if(correctAnswer === selectedElement.id) {
        console.log("Correct answer!");
        selectedElement.style.color = 'green';
    } else {
        console.log(`Expected key: ${correctAnswer}, current key: ${selectedElement.id}`);
        selectedElement.style.color = 'red';
        const properElement = answerElements[correctAnswer];
        properElement.style.border = '1px solid green';

    }

}