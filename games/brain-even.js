import { askQuestion, generateRandomNumber } from '../src/index.js';

const MAX_VALUE = 100;

const playOneRound = () => {
  const questionNumber = generateRandomNumber(MAX_VALUE);
  let correctAnswer;
  const isEven = questionNumber % 2 === 0;
  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return askQuestion(questionNumber, correctAnswer);
};

export default playOneRound;
