#!/usr/bin/env node

import generateQuestion from '../games/brain-calc.js';
import { playGame } from '../src/index.js';

const main = () => {
  playGame('What is the result of the expression?', generateQuestion);
};
main();
