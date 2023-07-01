import { askQuestion, generateRandomNumber } from '../src/index.js';

const generateQuestion = () => {
  const question = generateRandomNumber(100);

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

const playOneRound = () => {
  const question = generateQuestion();
  return askQuestion(question.question.toString(), question.correctAnswer);
};

export default playOneRound;
