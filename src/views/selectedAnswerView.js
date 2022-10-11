

export const selectAnswerVariant = (selectedElement, rightAnswer) => {
    selectedElement.setAttribute('class','selected element');
    rightAnswer.setAttribute('class', 'answer');
    if(selectedElement === rightAnswer) {
        selectedElement.classList.add('selected-green');
    } else {
        selectedElement.classList.add('selected-red');
        rightAnswer.classList.add('border');
    }

}