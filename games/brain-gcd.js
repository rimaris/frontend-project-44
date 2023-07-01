import { generateRandomNumber } from '../src/index.js';

const MAX_NUMBER = 100;

const generateQuestion = () => {
  const firstNumber = generateRandomNumber(MAX_NUMBER) + 1;
  const secondNumber = generateRandomNumber(MAX_NUMBER) + 1;

  const min = Math.min(firstNumber, secondNumber);
  let maxDivisor = 1;
  for (let i = 1; i <= min; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      maxDivisor = i;
    }
  }

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: maxDivisor,
  };
};

export default generateQuestion;
