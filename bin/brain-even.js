#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const MAX_VALUE = 100;

const generateRandomNumber = () => Math.ceil(Math.random() * MAX_VALUE);

const askQuestion = () => {
  const questionNumber = generateRandomNumber();
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer ');
  let correctAnswer;
  const isEven = questionNumber % 2 === 0;
  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const main = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = askQuestion();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

main();
