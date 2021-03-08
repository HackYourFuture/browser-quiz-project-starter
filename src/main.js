import quizData from './data.js'

const QUESTIONS = quizData.map(element => element.question)

const ANSWERS = quizData.map(element => element.answers)

const CORRECT_ANSWERS = quizData.map(element => element.correct)


let CURRENT_QUESION = 1;

let randomQuestion = Math.floor(Math.random() * 8) + 1;


const container = document.getElementById("container")

function newQuestion(CURRENT_QUESION) {
  container.textContent = ""
  if (CURRENT_QUESION > 8) {
    const h2 = document.createElement("h2")
    container.appendChild(h2).innerText = "Thank you for taking JavaScript Quiz !"
    return
  }
  displayPage()
}
newQuestion(CURRENT_QUESION)


function displayPage() {
  const h1 = document.createElement("h1")
  container.appendChild(h1)
  container.style.backgroundColor = "lightgrey"
  document.body.style.backgroundColor = "lightblue"
  h1.textContent = QUESTIONS[CURRENT_QUESION]
  const h3 = document.createElement("h3")
  h1.appendChild(h3)
  h3.textContent = `${CURRENT_QUESION}/8`
  ANSWERS[CURRENT_QUESION].forEach(answers => {
    const option = document.createElement("option");
    container.append(option);
    option.classList.add("div-class")
    option.textContent = answers
    option.setAttribute("value", `${answers}`)
    option.style.backgroundColor = "lightblue"
  })
}




function events() {

  const choseOption = document.querySelectorAll('.div-class')
  choseOption.forEach(el => el.addEventListener('click', choseAnswer))

  // let firstBtn = document.getElementsByClassName('div-class')[0].addEventListener('click', choseAnswer)

  // let secondbBtn = document.getElementsByClassName('div-class')[1].addEventListener('click', choseAnswer)

  // let thirdBtn = document.getElementsByClassName('div-class')[2].addEventListener('click', choseAnswer)

  // let forthBtn = document.getElementsByClassName('div-class')[3].addEventListener('click', choseAnswer)

}
events()

function choseAnswer() {
  container.textContent = ""
  const h1 = document.createElement("h1")
  container.appendChild(h1)
  h1.textContent = QUESTIONS[CURRENT_QUESION]
  const h3 = document.createElement("h3")
  h1.appendChild(h3)
  h3.textContent = `${CURRENT_QUESION}/8`
  ANSWERS[CURRENT_QUESION].forEach(answers => {
    const option = document.createElement("option");
    container.append(option);
    option.classList.add("div-class")
    option.textContent = answers
    option.setAttribute("value", `${answers}`)
    console.log(option.value)
    document.body.style.backgroundColor = "red"
    if (option.value === CORRECT_ANSWERS[CURRENT_QUESION]) {
      option.style.background = "green"
    } else {
      option.style.background = "red"
    }
  })
  const button = document.createElement("button")
  container.appendChild(button).textContent = "NEXT"
  button.style.backgroundColor = "lightblue"
  button.addEventListener('click', () => {
    CURRENT_QUESION++
    newQuestion(CURRENT_QUESION)
    events()
  })
}