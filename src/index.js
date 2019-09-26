import readlineSync from 'readline-sync';
import { cdr, car } from '@hexlet/pairs';

const roundsCount = 3;

const launcher = (description, makeGameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${description}`);

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const gameData = makeGameData();
    const correctAnswer = cdr(gameData);
    const question = car(gameData);

    console.log(`Question: ${question}`);

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
