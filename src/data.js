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
  score: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What country does this flag belong to?' ,
      answers: {
        a: 'Luxembourg',
        b: 'France',
        c: 'Netherlands',
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
      text: 'What country does this flag belong to?',
      answers: {
        a: 'Georgia',
        b: 'Azerbaijan',
        c: 'Kazakhstan',
        d: 'Armenia',
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
      text: 'What country does this flag belong to?',
      answers: {
        a: 'The Document Object Model',
        b: 'The Determiner of Methods',
        c: 'The Dominant Object Method',
        d: 'The Document of Model',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
        },
      ],
    }
  ],
};
