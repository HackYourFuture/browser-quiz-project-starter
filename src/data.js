'use strict';

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
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'What is mean by "this" keyword in javascript?',
      answers: {
        a: 'It refers current object',
        b: 'It refers previous object',
        c: 'It is variable which contains value',
        d: 'None of the above'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        },
        {
          text: 'Tutorials Teacher',
          href: 'https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript',
        },
      ],
    }
    // Add more questions here
  ],
};
