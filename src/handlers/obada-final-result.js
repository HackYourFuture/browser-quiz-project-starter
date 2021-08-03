/* here I want to show the final results and put them in two column .. 
first is the questions and the right answers that already selected .. 
second is the question and the answer should be then the wrong answer.*/

// the result should be objects inside array .. every object is like {text : "question string", selected: "answer"} 
let rightAnswers = [];
let wrongAnswers = [];
// this function should run when we submit every answer.
function gatherAllAnswers() {
    if (rightAnswer) {
        rightAnswers.push({question: element.text, answer: "string"/* Selected answer - string*/ });
    } else {
        wrongAnswers.push({question: element.text, answer: "string"/* Selected answer - string*/, "should be": element.answers[`${element.correct}`]});
    }
};

// show the whole result at the end .. like summary 
function presentTheResult () {
    // we change the structure of body or test container.
    document.body.innerHTML = `<div class="result-container">
    <!--for right answers-->
    <div class="right-answers"></div>
    <!--for wrong answers-->
    <div class="wrong-answers"></div>
</div>`;
    // targeting the <div>s to be able to modify.
    const rightAnswersSection = document.querySelector(".right-answers");
    const wrongAnswersSection = document.querySelector(".wrong-answers");
    
    // make a div inside rightAnswersSection with this structure for every right answer 
    rightAnswers.forEach(element => {
        rightAnswersSection.innerHTML +=`
        <div class="result">
            <h3>${element.question}</h3> <br>
            <span class="selected correct">${element.answer}</span>
        </div>
        <hr>`;
    });

    // make a div inside wrongAnswersSection with this structure for every wrong answer 
    wrongAnswers.forEach(element => {
        wrongAnswersSection.innerHTML +=`
        <div class="result">
            <h3>${element.question}</h3> <br>
            <span class="selected wrong">${element.answer}</span>
            <br>
            <span class="correct">${element["should be"]}</span>
            <hr>
        </div>
        <hr>` ;
    });
}
