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
  currentQuestionAnswer: null,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'var, constant, let',
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
      text: 'How does a FOR loop start?',
      answers: {
        a: 'for(let i=0; i<10; i++)',
        b: 'for(i<10; i++)',
        c: 'while(let i=0; i<10; i++)',
        d: 'for(i=0; i>5; i--)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'W3 Schools',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=tr#for_statement',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math(7.25)',
        b: 'Round(7.25)',
        c: 'Math.round(7.25)',
        d: 'Math.Round(7.25)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/numbers',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    }
    // Add more questions here
  ],
};
