#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playOneRound from '../games/brain-gcd.js';

const main = () => {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playOneRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

main();
