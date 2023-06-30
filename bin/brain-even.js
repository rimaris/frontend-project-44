#!/usr/bin/env node
import greetUser from '../src/cli.js';
import askQuestion from '../src/index.js';

const MAX_VALUE = 100;

const generateRandomNumber = () => Math.ceil(Math.random() * MAX_VALUE);

const playOneRound = () => {
  const questionNumber = generateRandomNumber();
  let correctAnswer;
  const isEven = questionNumber % 2 === 0;
  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return askQuestion(questionNumber, correctAnswer);
};

const main = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
