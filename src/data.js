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
  rightAnswers: 0,
  wrongAnswers: 0,
  skippedQuestions: 0,
  result: {
    right: 0,
    wrong: 0,
    skipped: 0,
  },
  questions: [
    {
      text: 'Which of the following tag is used for inserting the largest heading in HTML?',
      answers: {
        a: 'head',
        b: 'h1',
        c: 'h6',
        d: 'heading',
      },
      correct: 'b',
      selected: null,
      explanation:
        'Headings in HTML starts from &lth1&gt to &lth6&gt in which &lth1&gt heading is the largest one and &lth6&gt is smallest one among those. The heading tags are &lth1&gt &lth2&gt &lth3&gt &lth4&gt &lth5&gt and &lth6&gt that are used for the creations of headings.',
      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which element is used for styling HTML5 layout?',
      answers: {
        a: 'CSS',
        b: 'jQuery',
        c: 'JavaScript',
        d: 'PHP',
      },
      correct: 'a',
      selected: null,
      explanation:
        'For styling HTML5, CSS i.e Cascading Style Sheet is used. It is style sheet language and designed to describe presentation of its content including layouts, colors and fonts. CSS can control the layout of multiple webpages.',
      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which is the HTML paragraph tag?',
      answers: {
        a: 'hr',
        b: 'br',
        c: 'p',
        d: 'a',
      },
      correct: 'c',
      selected: null,
      explanation: '&ltp&gt tag is used for paragraph in HTML.',
      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following is not an error in JavaScript?',
      answers: {
        a: 'Missing of Bracket',
        b: 'Division by zero',
        c: 'Syntax error',
        d: 'Missing of semicolons',
      },
      correct: 'b',
      selected: null,
      explanation:
        'In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN.',
      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    {
      text: 'Why JavaScript Engine is needed?',
      answers: {
        a: 'Both Compiling & Interpreting the JavaScript',
        b: 'Parsing the javascript',
        c: 'Interpreting the JavaScript',
        d: 'Compiling the JavaScript',
      },
      correct: 'c',
      selected: null,
      explanation:
        'For the most part, the JS Engine is used to interpret JavaScript. It’s used to parse javascript and run it on a web page.',
      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS Property controls how an element is positioned?',
      answers: {
        a: 'static',
        b: 'set',
        c: 'fix',
        d: 'position',
      },
      correct: 'd',
      selected: null,
      explanation:
        'Position property controls how an element is positioned. When set to absolute or fixed, the element is removed completely from the normal flow of the document. When set to relative, the element is moved relative to its position in the normal flow, but a space is left where it would normally have been. The default value, static, means the element remains in the normal flow and is not positioned.',
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS selectors are used to specify a group of elements?',
      answers: {
        a: 'class',
        b: 'id',
        c: 'tag',
        d: 'both class and tag',
      },
      correct: 'a',
      selected: null,
      explanation:
        'Class selectors are used to specify a group of elements. Id selector specifies a particular unique element.',
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
      answers: {
        a: 'tag',
        b: 'id',
        c: 'class',
        d: 'both class and tag',
      },
      correct: 'b',
      selected: null,
      explanation:
        'For binding a particular unique element, id selectors are used. While for a group of elements, class selector can be used.',
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?',
      answers: {
        a: 'border-collapse',
        b: 'border',
        c: 'padding',
        d: 'border-width',
      },
      correct: 'd',
      selected: null,
      explanation:
        'The border-width property sets the width of an element`s four borders. This property can have from one to four values.',
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS property sets the shadow for a box element?',
      answers: {
        a: 'box-shadow',
        b: 'set-shadow',
        c: 'shadow',
        d: 'canvas-shadow',
      },
      correct: 'a',
      selected: null,
      explanation: 'box-shadow property sets the shadow for a box element.',
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
  ]
};
