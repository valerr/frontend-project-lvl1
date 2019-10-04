import { cons } from '@hexlet/pairs';
import launcher from '../index';
import getRandomInt from '../utils';

const description = 'Answer "yes" if the number is even, otherwise the answer is "no".';

const isEven = (num) => num % 2 === 0;

const makeGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => launcher(description, makeGameData);
