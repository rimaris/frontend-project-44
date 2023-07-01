import { askQuestion } from '../src/index.js';

const generateQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;

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

const playOneRound = () => {
  const question = generateQuestion();
  return askQuestion(question.question, question.correctAnswer.toString());
};

export default playOneRound;
