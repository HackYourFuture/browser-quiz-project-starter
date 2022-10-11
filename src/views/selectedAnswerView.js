

export const selectAnswerVariant = (selectedElement, rightAnswer) => {
    if(selectedElement === rightAnswer) {
        console.log("Correct answer!");
        selectedElement.style.color = 'green';
    } else {
        selectedElement.style.color = 'red';
        rightAnswer.style.border = '1px solid green';
    }

}