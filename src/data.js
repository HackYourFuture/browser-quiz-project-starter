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
  finalScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'In golf, what name is given to a hole score of two under par?',
      answers: {
        a: 'Eagle',
        b: 'Birdie',
        c: 'Bogey',
        d: 'Albatross',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'par_wikipedia',
          href: 'https://en.wikipedia.org/wiki/Par_(score)#Eagle',
        },
        {
          text: 'Tony Twillie',
          href: 'https://qr.ae/pvbdlL',
        },
      ],
    },
    {
      text: 'Who won the 2015 Formula 1 World Championship?',
      answers: {
        a: 'Jenson Button',
        b: 'Sebastian Vettel',
        c: 'Nico Rosberg',
        d: 'Lewis Hamilton',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'formula1',
          href: 'https://www.formula1.com/en/results.html/2015/races.html',
        },
        {
          text: 'F1Mix',
          href: 'https://f1mix.com/results/2015-formula-1-world-championship/',
        },
      ],
    },
    {
      text: 'How do we say goodbye in spanish?',
      answers: {
        a: 'Hola',
        b: 'Au Revoir',
        c: 'Adiós',
        d: 'Salir',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Spanish Good-bye',
          href:
            'https://www.fluentu.com/blog/spanish/how-to-say-goodbye-spanish/#toc_10',
        },
        {
          text: 'Dictionary',
          href:
            'https://www.spanishdict.com/guide/how-to-say-good-bye-in-spanish',
        },
      ],
    },

    {
      text: 'What was the cause of Marilyn Monroes suicide?',
      answers: {
        a: 'Knife Attack',
        b: 'Drug Overdose',
        c: 'House Fire',
        d: 'Gunshot',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Suicide day in history',
          href:
            'https://www.history.com/this-day-in-history/marilyn-monroe-is-found-dead',
        },
        {
          text: 'From the Archives',
          href:
            'https://www.latimes.com/local/obituaries/archives/la-me-marilyn-monroe-19620806-story.html',
        },
      ],
    },

    {
      text: 'The Los Angeles Dodgers were originally from what U.S. city?',
      answers: {
        a: 'Las Vegas',
        b: 'Boston',
        c: 'Brooklyn',
        d: 'Seattle',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Britannica',
          href: 'https://www.britannica.com/topic/Los-Angeles-Dodgers',
        },
        {
          text: 'History of Dodgers',
          href: 'https://sportsteamhistory.com/los-angeles-dodgers/',
        },
      ],
    },
    {
      text: 'What alcoholic drink is made from molasses?',
      answers: {
        a: 'Rum',
        b: 'Gin',
        c: 'Vodka',
        d: 'Whisky',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Rum',
        },
        {
          text: 'thetriangle.org',
          href:
            'https://www.thetriangle.org/entertainment/historical-liquor-made-from-molasses-sugar/',
        },
      ],
    },
    {
      text: 'What is the historical name of Sri Lanka?',
      answers: {
        a: 'Myanmar',
        b: 'Colombo',
        c: 'Badulla',
        d: 'Ceylon',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Britannica',
          href: 'https://www.britannica.com/place/Sri-Lanka',
        },
        {
          text: 'Gabriel Asirvatham',
          href: 'https://qr.ae/pvbdj6',
        },
      ],
    },
    {
      text:
        'What collaborative album was released by Kanye West and Jay-Z in 2011?',
      answers: {
        a: 'Distant Relatives',
        b: 'What a Time to be Alive',
        c: 'Watch the Throne',
        d: 'Unfinished Business',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'theguardian.com',
          href:
            'https://www.theguardian.com/music/2011/jul/26/jay-z-kanye-west-throne',
        },
        {
          text: 'Fandom',
          href: 'https://kanyewest.fandom.com/wiki/Watch_The_Throne',
        },
      ],
    },

    {
      text:
        'What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?',
      answers: {
        a: 'Silk Road',
        b: 'Spice Road',
        c: 'Clay Road',
        d: 'Salt Road',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Khan Academy',
          href:
            'https://www.khanacademy.org/humanities/world-history/ancient-medieval/silk-road/a/the-silk-road#:~:text=The%20Silk%20Road%20was%20a,transported%20along%20these%20trade%20networks.',
        },
        {
          text: 'Britannica',
          href: 'https://www.britannica.com/topic/Silk-Road-trade-route',
        },
      ],
    },

    {
      text:
        'When Gmail first launched, how much storage did it provide for your email?',
      answers: {
        a: '512MB',
        b: '1GB',
        c: '5GB',
        d: 'Unlimited',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Gmail#:~:text=On%20April%201%2C%202004%2C%20Gmail,to%20two%20gigabytes%20of%20storage.',
        },
        {
          text: 'Balaji Viswanathan',
          href: 'https://qr.ae/pvbddL',
        },
      ],
    },
  ],
};
