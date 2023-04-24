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
      text: 'What country has the highest life expectancy?',
      answers: {
        a: 'Ethiopia',
        b: 'Hong kong',
        c: 'Gambia',
        d: 'Syria',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'Where would you be if you were standing on the Spanish Steps?',
      answers: {
        a: 'sicily',
        b: 'italy',
        c: 'mexico',
        d: 'Rome',
      },
      correct: 'd',
      selected: null,
    },
    // Add more questions here
    {
      text: 'Which language has the more native speakers?',
      answers: {
        a: 'French',
        b: 'English',
        c: 'Spanish',
        d: 'Arabic',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'How many minutes are in a full week?',
      answers: {
        a: '10,080',
        b: '12,000',
        c: '9,999',
        d: '10,000',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'How many elements are in the periodic table? ',
      answers: {
        a: '89',
        b: '118',
        c: '114',
        d: '100',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'what is "usb" stands for ?',
      answers: {
        a: 'users should beware',
        b: 'unique serial baby',
        c: 'Universal Serial Bus',
        d: 'universal series branch',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What does KFC stand for?',
      answers: {
        a: 'king fry chicken',
        b: 'kentucky fry chiptole',
        c: 'Kentucky Fried Chicken',
        d: 'knife fighters club ',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'in friends tv show what is joey catchphrase',
      answers: {
        a: 'HOW YOU DOIN?',
        b: 'HEY, YOU?',
        c: 'OMG!!',
        d: 'Chandler bing',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is Batman’s butler called?',
      answers: {
        a: 'The joker',
        b: 'Alfred',
        c: 'Bruce',
        d: 'chandler',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'what is the capital city of Netherlands?',
      answers: {
        a: 'Berlin',
        b: 'Den Haag',
        c: 'Amsterdam',
        d: 'Alkmaar',
      },
      correct: 'c',
      selected: null,
    },
  ],
};
