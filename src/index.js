import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export const askQuestion = (questionText, correctAnswer) => {
  console.log(`Question: ${questionText}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export const generateRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

export const playGame = (gameRules, playOneRound) => {
  const userName = greetUser();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playOneRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
