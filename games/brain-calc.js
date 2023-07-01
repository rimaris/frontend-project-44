import { generateRandomNumber } from '../src/index.js';

const MAX_NUMBER = 40;

const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(operators.length)];
  const firstNumber = generateRandomNumber(MAX_NUMBER) + 1;
  const secondNumber = generateRandomNumber(MAX_NUMBER) + 1;

  let correctAnswer;
  if (operator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }

  const operation = `${firstNumber} ${operator} ${secondNumber}`;
  return {
    question: operation,
    correctAnswer,
  };
};

export default generateQuestion;
