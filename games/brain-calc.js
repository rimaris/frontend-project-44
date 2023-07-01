import { askQuestion } from '../src/index.js';

const generateRandomMathOperation = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = Math.floor(Math.random() * 40) + 1;
  const secondNumber = Math.floor(Math.random() * 40) + 1;

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

const playOneRound = () => {
  const question = generateRandomMathOperation();
  return askQuestion(question.question, question.correctAnswer.toString());
};

export default playOneRound;
