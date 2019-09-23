import launcher, { quesAns, getRandomInt } from './utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;
  const numSqrt = Math.sqrt(num);

  for (let i = 3; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeGameData = () => {
  const question = getRandomInt(1, 100);
  const gameAnswer = isPrime(question) ? 'yes' : 'no';

  console.log(`Question: ${question}`);

  return quesAns(question, gameAnswer);
};

const playPrime = () => launcher(description, makeGameData);
export default playPrime;
