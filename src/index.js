import readlineSync from 'readline-sync';

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
