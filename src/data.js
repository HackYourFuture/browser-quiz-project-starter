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
  //- y - added score property for realtime score
  score: 0,
  // the questions in the quiz
  questions: [
    {
      text: "In what movie Thor's hammer was first shown?",
      answers: {
        a: 'Iron Man',
        b: 'The Incredible Hulk',
        c: 'Iron Man 2',
        d: 'The first avenger',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'About Thor',
          href: 'https://en.wikipedia.org/wiki/Thor_(film)',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: 'When Red Skull stealed Tesseract?',
      answers: {
        a: '1940',
        b: '1956',
        c: '1942',
        d: 'There are no information about this',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'About Red Skull',
          href: 'https://en.wikipedia.org/wiki/Red_Skull',
        },
        {
          text: 'About Captain America',
          href: 'https://en.wikipedia.org/wiki/Captain_America',
        },
      ],
    },
    {
      text:
        'Which country did Natasha Romanoff went to to recruit Bruce Banner?',
      answers: {
        a: 'Nepal',
        b: 'India',
        c: 'China',
        d: 'Thailand',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'About Natasha Romanoff',
          href: 'https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)',
        },
        {
          text: 'About Hulk',
          href: 'https://en.wikipedia.org/wiki/Hulk',
        },
      ],
    },
    {
      text: "What is the name of Nick Fury's cat that swallowed the Tessaract?",
      answers: {
        a: 'Poose',
        b: 'Fellow',
        c: 'Goose',
        d: 'Pops',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'About Nick Fury',
          href: 'https://en.wikipedia.org/wiki/Nick_Fury',
        },
        {
          text: 'About Tesseract',
          href: 'https://en.wikipedia.org/wiki/Infinity_Stones#Space_Stone',
        },
      ],
    },
    {
      text: "What is the name of Tony Stark's daughter?",
      answers: {
        a: 'Megan',
        b: 'Sony',
        c: 'Sheryl',
        d: 'Morgan',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'About Tony Stark',
          href:
            'https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: "What is the name of Thor's ex-girlfriend?",
      answers: {
        a: 'Jody',
        b: 'Jane',
        c: 'Marry',
        d: 'Morgan',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'About Thor',
          href:
            'https://en.wikipedia.org/wiki/Thor_(Marvel_Cinematic_Universe)',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: 'What color is the reality stone?',
      answers: {
        a: 'Red',
        b: 'Blue',
        c: 'Purple',
        d: 'Yellow',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'About Infinity stones',
          href: 'https://en.wikipedia.org/wiki/Infinity_Stones',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: 'In what country was Tony Stark/Iron Man captured?',
      answers: {
        a: 'Pakistan',
        b: 'Iraq',
        c: 'Afghanistan',
        d: 'Iran',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'About Tony Stark',
          href:
            'https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: "What is the name of Peter Quill's father?",
      answers: {
        a: 'Krass',
        b: 'Ego',
        c: 'Deral',
        d: 'Ing',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'About Peter Quill',
          href: 'https://en.wikipedia.org/wiki/Star-Lord',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
    {
      text: "What was the nickname of Wanda's brother?",
      answers: {
        a: 'Nickel',
        b: 'Iron',
        c: 'Mercury',
        d: 'Xenon',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'About Wanda',
          href:
            'https://en.wikipedia.org/wiki/Wanda_Maximoff_(Marvel_Cinematic_Universe)',
        },
        {
          text: 'Marvel Cinematic Universe',
          href: 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe',
        },
      ],
    },
  ],
};
