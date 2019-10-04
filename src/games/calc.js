import { cons } from '@hexlet/pairs';
import launcher from '../index';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const makeGameData = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);

  const operatorIndex = getRandomInt(0, operators.length - 1);
  const question = `${first} ${operators[operatorIndex]} ${second}`;
  const correctAnswer = String(getCorrectAnswer(operators[operatorIndex], first, second));

  return cons(question, correctAnswer);
};

export default () => launcher(description, makeGameData);
