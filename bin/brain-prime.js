#!/usr/bin/env node

import generateQuestion from '../games/brain-prime.js';
import { playGame } from '../src/index.js';

const main = () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestion);
};

main();
