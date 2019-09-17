import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const quesAns = (question, answer) => cons(question, answer);
const getQuestion = quesAns => car(quesAns);
const getAnswer = quesAns => cdr(quesAns);

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};

const rounds = 3;

const launcher = (description, makeGameData) => {
	console.log('Welcome to the Brain Games!\n');
	console.log(`${description}`);

	const playerName = getPlayerName();

	console.log(`Hello, ${playerName}!\n`);

	for (let i = 1; i <= rounds; i++) {
		const gameData = makeGameData();
		const question = getQuestion(gameData);
		const correctAnswer = getAnswer(gameData);

		const playerAnswer = readlineSync.question('Your answer: ');

		if (playerAnswer === correctAnswer) {
			console.log('Correct!');
		} else {
			console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
	}
	console.log(`Congratulations, ${playerName}!`);
};

export default launcher;
