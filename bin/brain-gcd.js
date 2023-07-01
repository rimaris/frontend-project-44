#!/usr/bin/env node

import { playGame } from '../src/index.js';
import playOneRound from '../games/brain-gcd.js';

const main = () => {
  playGame('Find the greatest common divisor of given numbers.', playOneRound);
};

main();
