import { generateRandomNumber } from '../src/index.js';

const MAX_NUMBER = 100;

const generateQuestion = () => {
  const question = generateRandomNumber(MAX_NUMBER);

  let correctAnswer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
    }
  }
  return {
    question, correctAnswer,
  };
};

export default generateQuestion;
