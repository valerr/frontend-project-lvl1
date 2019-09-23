import launcher, { quesAns, getRandomInt } from '../utils';

const description = 'What number is missing in the progression?';
const progrLength = 10;

const makeProgression = (firstNum, diff) => {
  const progression = [];

  for (let i = 0; i < progrLength; i += 1) {
    progression[i] = firstNum + diff * i;
  }
  return progression;
};

const makeGameData = () => {
  const num1 = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = makeProgression(num1, step);
  const hiddenInd = getRandomInt(1, progrLength);

  const gameAnswer = String(progression[hiddenInd]);
  progression[hiddenInd] = '..';
  const question = progression.join(' ');

  console.log(`Question: ${question}`);

  return quesAns(question, gameAnswer);
};

const playProgression = () => launcher(description, makeGameData);
export default playProgression;
