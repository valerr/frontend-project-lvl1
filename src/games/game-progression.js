import { cons } from '@hexlet/pairs';
import launcher from '../index';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (start, difference, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result[i] = start + difference * i;
  }
  return result;
};

const makeGameData = () => {
  const num1 = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = makeProgression(num1, step, progressionLength);
  const indexHiddenElem = getRandomInt(0, progressionLength - 1);

  const correctAnswer = String(progression[indexHiddenElem]);
  progression[indexHiddenElem] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => launcher(description, makeGameData);
