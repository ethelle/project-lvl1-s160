import readlineSync from 'readline-sync';
import { getCalcQuestion, getCalcRule } from './games/calc';
import { getEvenQuestion, getEvenRule } from './games/even';

export const welcome = (message) => {
  console.log(message);
};

export const questionName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getReles = (gameName) => {
  if (gameName === 'calcGame') {
    console.log(getCalcRule());
  } else if (gameName === 'evenGame') {
    console.log(getEvenRule());
  }
};

export const getAnswer = (question, rightAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rightAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answer === rightAnswer.toString();
};

const countRightAnswer = 3;

export const gameInit = (gameName) => {
  console.log('Welcome to the Brain Games!');
  getReles(gameName);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let round = 0;
  let isRigthAnswer = true;
  while (round < countRightAnswer && isRigthAnswer) {
    if (gameName === 'calcGame') {
      isRigthAnswer = getCalcQuestion(round);
    } else if (gameName === 'evenGame') {
      isRigthAnswer = getEvenQuestion();
    }
    if (isRigthAnswer) {
      round += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
  if (round === countRightAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};
