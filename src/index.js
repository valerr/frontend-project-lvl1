import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
};

export default getPlayerName;
