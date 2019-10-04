import { cons } from '@hexlet/pairs';
import launcher from '../index';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let number1 = a;
  let number2 = b;

  const smaller = a > b ? b : a;

  if (a % b === 0 || b % a === 0) {
    return smaller;
  }

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const makeGameData = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);

  const correctAnswer = String(findGcd(first, second));
  const question = `${first} ${second}`;

  return cons(question, correctAnswer);
};

export default () => launcher(description, makeGameData);
