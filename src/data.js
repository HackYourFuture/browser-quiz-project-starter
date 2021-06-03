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
  correctAnswerScore: 0,
  numberOfQuestions: 5,
  selectedQuestionsIndex: [],
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
    // Add more questions here
    {
      text: 'The most popular programing language in 2020 is ?',
      answers: {
        a: 'javascript',
        b: 'python',
        c: 'java',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'According to Northeastern University',
          href:
            'https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/',
        },
        {
          text: 'computer.com',
          href:
            'https://www.computer.org/publications/tech-news/trends/programming-languages-you-should-learn-in-2020',
        },
      ],
    },
    {
      text: 'JavaScript was created by Brendan Eich in?',
      answers: {
        a: '1994',
        b: '1995',
        c: '1998',
        d: '1992',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Javascript History',
          href:
            'https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17#:~:text=JavaScript%20was%20created%20by%20Brendan,his%20time%20at%20Netscape%20Communications.',
        },
        {
          text: 'Brendan Eich',
          href: 'https://en.wikipedia.org/wiki/Brendan_Eich',
        },
      ],
    },
    {
      text: 'How can we read the properties of an object?',
      answers: {
        a: 'print',
        b: 'log',
        c: 'alert',
        d: 'promt',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_object_properties.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
        },
      ],
    },
    {
      text: 'To ask the user for input we use ?',
      answers: {
        a: 'bracket',
        b: 'index',
        c: '==',
        d: 'dot notation',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'stackabuse',
          href: 'https://stackabuse.com/getting-user-input-in-python/',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors',
        },
      ],
    },
    {
      text: 'JavaScript was originally called ?',
      answers: {
        a: 'Jave',
        b: 'Mocha',
        c: 'JSON',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/JavaScript',
        },
        {
          text: 'Spring Board',
          href: 'https://www.springboard.com/blog/history-of-javascript/',
        },
      ],
    },
    {
      text: 'What is === operator in JavaScript ?',
      answers: {
        a: 'compare types',
        b: 'compare functions',
        c: 'compare values and types',
        d: 'compare values',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.javatpoint.com/javascript-operators',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
        },
      ],
    },
    {
      text: 'JS stands for ?',
      answers: {
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.allacronyms.com/JS',
        },
        {
          text: 'Geeks For Geeks',
          href: 'https://www.geeksforgeeks.org/js-full-form/',
        },
      ],
    },
    {
      text: 'What is an IIFE in JavaScript ?',
      answers: {
        a: 'normal function',
        b: 'Immediately Invoked Function Expression',
        c: 'IIFE does not exist in JavaScritp',
        d: 'type of classes is JavaScript',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE',
        },
      ],
    },
    {
      text: 'How do you declare a JavaScript variable?',
      answers: {
        a: 'v carName',
        b: 'var carName',
        c: 'variable carName',
        d: 'variable CARNAME',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_variables.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables',
        },
      ],
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)',
      answers: {
        a: 'false',
        b: 'NaN',
        c: 'true',
        d: 'null',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_datatypes.asp',
        },
      ],
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onmouseclick',
        b: 'mouseclickon',
        c: 'onclick',
        d: 'onchange',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_events.asp',
        },
      ],
    },
    {
      text: 'How do you find the number with the highest value of x and y?',
      answers: {
        a: 'Math.ceil(x, y)',
        b: 'top(x, y)',
        c: 'ceil(x, y)',
        d: 'Math.max(x, y)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_math.asp',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math.rnd(7.25)',
        b: 'Math.round(7.25)',
        c: 'rnd(7.25)',
        d: 'round(7.25)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_math.asp',
        },
      ],
    },
  ],
};
