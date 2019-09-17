import { quesAns } from './index';
import readlineSync from 'readline-sync';
import launcher from './index';

const gerRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const description = 'Answer "yes" if the number is even, otherwise the answer is "no".';

const showQuestion = () => {
	const number = gerRandomInt(1, 100);
	console.log(`Question: ${number}`);
	return number;
};

const isEven = (num) => num % 2 === 0;

const makeGameData = () => {
	const number = showQuestion();
	const correctAnswer = isEven(number) ? 'yes' : 'no';

	return quesAns(number, correctAnswer);
};

export const playEven = () => launcher(description, makeGameData);