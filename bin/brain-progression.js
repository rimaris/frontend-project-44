#!/usr/bin/env node

import { playGame } from '../src/index.js';
import playOneRound from '../games/brain-progression.js';

const main = () => {
  playGame('What number is missing in the progression?', playOneRound);
};

main();
