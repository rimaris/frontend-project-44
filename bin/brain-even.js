#!/usr/bin/env node

import generateQuestion from '../games/brain-even.js';
import { playGame } from '../src/index.js';

const main = () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestion);
};

main();
