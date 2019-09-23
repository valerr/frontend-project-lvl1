import launcher, { quesAns, getRandomInt } from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const add = (firstNum, secondNum) => firstNum + secondNum;

const subtract = (firstNum, secondNum) => firstNum - secondNum;

const multiply = (firstNum, secondNum) => firstNum * secondNum;

const correctAnswer = (operator, firstNum, secondNum) => {
  if (operator === '+') {
    return add(firstNum, secondNum);
  } if (operator === '-') {
    return subtract(firstNum, secondNum);
  } if (operator === '*') {
    return multiply(firstNum, secondNum);
  }
  return null;
};

const makeGameData = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  const operInd = getRandomInt(0, operators.length - 1);
  const question = `${firstNum} ${operators[operInd]} ${secondNum}`;
  const gameAnswer = String(correctAnswer(operators[operInd], firstNum, secondNum));
  console.log(`Question: ${question}`);
  return quesAns(question, gameAnswer);
};

const playCalc = () => launcher(description, makeGameData);
export default playCalc;
