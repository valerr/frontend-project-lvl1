import readlineSync from 'readline-sync';

export const getPlayerName = () => {
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!\n`);
};
