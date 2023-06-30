import askQuestion from '../src/index.js';

const MAX_VALUE = 100;

const generateRandomNumber = () => Math.ceil(Math.random() * MAX_VALUE);

const playOneRound = () => {
  const questionNumber = generateRandomNumber();
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
