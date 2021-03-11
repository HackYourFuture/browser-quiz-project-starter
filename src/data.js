'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners

*/

// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead
/**
 * data that is saved and used between user interactionss
 * @property {string} separator - the full user artwork
 * @property {string[]} lines - all the lines that have been entered
 */
export const data = {
  separator: '|',
  lines: [],
};

// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 *
 */
export const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === null?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
    wrong: 0,
    //
    currentQuestion: 0,
  },
  // the questions in the quiz
  questions: [
    {
      title: 'Variable Declaration',
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
      title: 'typeof Keyword',
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
      title: 'JavaScript History',
      text: 'Which company developed JavaScript?',
      answers: {
        a: 'Microsoft',
        b: 'Sun Microsystems',
        c: 'Netscape',
        d: 'Oracle',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'this Keyword',
      text: 'What is this keyword in JavaScript?',
      answers: {
        a: 'refers to the object from where it was called.',
        b: 'refers to current function',
        c: 'refers to browser',
        d: 'refers to global scope',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'JavaScript Data Types',
      text: 'Which answer is not JavaScript Data Types?',
      answers: {
        a: 'String',
        b: 'Undefined',
        c: 'Object',
        d: 'Array',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'isNaN Function',
      text: 'What is the use of isNaN function?',
      answers: {
        a: 'returns true if the argument is not a number',
        b: 'returns false if the argument is not a number',
        c: 'returns true if the argument is not null',
        d: 'returns false if the argument is not null',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'Automatic type conversion',
      text: 'What would be the result of 3+2+"7"?',
      answers: {
        a: '327',
        b: '12',
        c: '57',
        d: '5 7',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'undefined',
      text: ' What is an undefined value in JavaScript? which answer is wrong.',
      answers: {
        a: 'Variable used in the code does not exist',
        b: 'Variable is not assigned to any value',
        c: 'Property does not exist',
        d: 'Variable is null',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    {
      title: 'Compare operator',
      text: ' What is === operator in JavaScript ?',
      answers: {
        a: 'Compare types',
        b: 'Compare values',
        c: 'Compare functions',
        d: 'Compare values and Types',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Link about this question 1',
          href: 'https://',
        },
        {
          text: 'Link about this question 2',
          href: 'https://',
        },
      ],
    },
    // Add more questions here
  ],
};
