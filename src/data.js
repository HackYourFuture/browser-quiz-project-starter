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
  correctAnswersCount: 0,
  quizCompleted: false, //quizCompleted property defined here. I put false, because if the application starts it should be false
  
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'const, let, variable',
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
      text: 'Which HTML attribute is used to define inline styles?',
      answers: {
        a: 'font',
        b: 'class',
        c: 'style',
        d: 'css',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.codecademy.com/article/html-inline-styles',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style',
        },
      ],
    },
    {
      text: 'What does CSS stand for?',
      answers: {
        a: 'Computer Style Sheets',
        b: 'Colorful Style Sheets',
        c: 'Creative Style Sheets',
        d: 'Cascading Style Sheets',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Css.info',
          href: 'https://www.codecademy.com/learn/learn-css',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
      ],
    },
    {
      text: 'Who is making the Web standards?',
      answers: {
        a: 'W3C',
        b: 'Microsoft',
        c: 'Google',
        d: 'Mozilla',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'W3C.info',
          href: 'https://www.w3.org',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Glossary/W3C',
        },
      ],
    },
    {
      text: 'JavaScript is ______ Side Scripting Language.',
      answers: {
        a: 'Server',
        b: 'ISP',
        c: 'Browser',
        d: 'None of These',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'JavaScript.info',
          href: 'https://www.codecademy.com/article/what-is-javascript',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ],
    },
    {
      text: 'The property in CSS used to change the background color of an element is?',
      answers: {
        a: 'bgcolor',
        b: 'colo',
        c: 'background-color',
        d: 'All of the above',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'CSS.info',
          href: 'https://www.codecademy.com/resources/docs/css/background/background-color',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color ',
        },
      ],
    },
    {
      text: 'The CSS property used to control the elements font size is?',
      answers: {
        a: 'text-style',
        b: 'font-size',
        c: 'text-size',
        d: 'font-style',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'CSS.info',
          href: 'https://www.codecademy.com/resources/docs/css/typography/font-size',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
        },
      ],
    },
    {
      text: 'Which selector is used to specify a style for one unique element?',
      answers: {
        a: 'id',
        b: 'text',
        c: 'attribute',
        d: 'class',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'CSS.info',
          href: 'https://www.codecademy.com/resources/docs/html/attributes/id',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id',
        },
      ],
    },
    {
      text: 'Are the negative values allowed in padding property?',
      answers: {
        a: 'Yes',
        b: 'No',
        c: 'It depends on HTM',
        d: 'None of the above',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'CSS.info',
          href: 'https://www.codecademy.com/resources/docs/css/comments',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
      ],
    },
    // Add more questions here
  ],
};

globalThis.quizData = quizData;
