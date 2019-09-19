import launcher, { quesAns } from './index';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const description = 'Answer "yes" if the number is even, otherwise the answer is "no".';

const showQuestion = () => {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  return number;
};

const isEven = (num) => num % 2 === 0;

const makeGameData = () => {
  const number = showQuestion();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return quesAns(number, correctAnswer);
};

const playEven = () => launcher(description, makeGameData);
export default playEven;
