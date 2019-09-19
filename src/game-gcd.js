import { getRandomInt } from './game-even';
import launcher, { quesAns } from './index';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let number1 = a;
  let number2 = b;

  const smaller = a > b ? b : a;

  if (a % b === 0 || b % a === 0) {
    return smaller;
  }

  // алгоритм Евклида делением

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
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  const gameAnswer = String(findGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  console.log(`Question: ${question}`);
  return quesAns(question, gameAnswer);
};

const playGcd = () => launcher(description, makeGameData);
export default playGcd;
