import { cons } from '@hexlet/pairs';
import launcher from '../index';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (start, difference, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression[i] = start + difference * i;
  }
  return progression;
};

const makeGameData = () => {
  const first = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = makeProgression(first, step, progressionLength);
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);

  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => launcher(description, makeGameData);
