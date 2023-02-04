/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What does HTML stand for?',
      answers: {
        a: 'Hyper Tag Markup Language',
        b: 'Hyper Text Markup Language',
        c: 'Hyperlinks Text Mark Language',
        d: 'Hyperlinking Text Marking Language',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What symbol indicates a tag?',
      answers: {
        a: 'Curved brackets e.g. {}',
        b: 'Square brackets e.g. []',
        c: 'Angle brackets e.g. <>',
        d: 'Exclamation marks e.g. !',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What is the correct tag for a line break?',
      answers: {
        a: 'brk /',
        b: 'line /',
        c: 'bk /',
        d: 'br /',
      },
      correct: 'd',
      selected: null,
    },
    {
      text: 'Which of these is a genuine tag keyword?',
      answers: {
        a: 'Body',
        b: 'Bold',
        c: 'Image',
        d: 'Header',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What does CSS stand for?',
      answers: {
        a: 'Computing Style Sheet',
        b: 'Creative Style System',
        c: 'Cascading Style Sheet',
        d: 'Creative Styling Sheet',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Where should a CSS file be referenced in a HTML file?',
      answers: {
        a: 'Before any HTML code',
        b: 'After all HTML code',
        c: 'Inside the head section',
        d: 'Inside the body section',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'What is the correct format for aligning written content to the center of the page in CSS?',
      answers: {
        a: 'Text-align:center',
        b: 'Font-align:center',
        c: 'Text:align-center',
        d: 'Font:align-center',
      },
      correct: 'a',
      selected: null,
    },
    {
      text:
        'What is the correct format for changing the background colour of a div in CSS?',
      answers: {
        a: 'Bg-color:red',
        b: 'Background-colour:red',
        c: 'Background = red',
        d: 'Background-color:red',
      },
      correct: 'd',
      selected: null,
    },
    {
      text: 'What is the correct format for a div?',
      answers: {
        a: 'Div-id=example',
        b: 'Div id="example"',
        c: 'Div="example"',
        d: 'Div.example',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What are variables used in JavaScript programs?',
      answers: {
        a: 'Varying randomly',
        b: 'Storing numbers, dates and other values',
        c: 'Used as header files',
        d: 'None of them',
      },
      correct: 'b',
      selected: null,
    },
  ],
};
