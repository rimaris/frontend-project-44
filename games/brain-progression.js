import { generateRandomNumber } from '../src/index.js';

const MAX_FIRST_VALUE = 50;
const MAX_DIFFERENCE = 10;
const PROGRESSION_LENGTH = 10;

const generateQuestion = () => {
  const firstNumber = generateRandomNumber(MAX_FIRST_VALUE);
  const difference = generateRandomNumber(MAX_DIFFERENCE);

  const progressionNumbers = [];
  let currentNumber = firstNumber;
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progressionNumbers.push(currentNumber);
    currentNumber += difference;
  }

  const hiddenElement = generateRandomNumber(progressionNumbers.length);
  const correctAnswer = progressionNumbers[hiddenElement];
  progressionNumbers[hiddenElement] = '..';
  return {
    question: progressionNumbers.join(' '),
    correctAnswer,
  };
};

export default generateQuestion;
