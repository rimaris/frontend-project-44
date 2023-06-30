import readlineSync from 'readline-sync';

const askQuestion = (questionText, correctAnswer) => {
  console.log(`Question: ${questionText}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export default askQuestion;
