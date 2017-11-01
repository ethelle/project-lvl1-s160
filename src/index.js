import readlineSync from 'readline-sync';

export const welcome = (message) => {
  console.log(message);
};

export const questionName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const isEven = (num) => {
  const res = (num % 2) === 0;
  return res;
};

const evenQuestion = () => {
  const randomNum = getRandom(1, 50);
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  return (answer === rightAnswer);
};

const answerProsessing = (answer, rightAnswer) => {
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return Number(answer) === rightAnswer;
};

const calcQuestion = (order) => {
  const randomNum1 = getRandom(1, 10);
  const randomNum2 = getRandom(1, 10);
  let rightAnswer = 0;
  switch (order % 3) {
    case 1:
      console.log(`Question: ${randomNum1} + ${randomNum2}`);
      rightAnswer = randomNum1 + randomNum2;
      break;
    case 2:
      console.log(`Question: ${randomNum1} - ${randomNum2}`);
      rightAnswer = randomNum1 - randomNum2;
      break;
    case 0:
      console.log(`Question: ${randomNum1} * ${randomNum2}`);
      rightAnswer = randomNum1 * randomNum2;
      break;
    default:
      console.log(`Question: ${randomNum1} + ${randomNum2}`);
      rightAnswer = randomNum1 + randomNum2;
  }
  const answer = readlineSync.question('Your answer: ');
  return answerProsessing(answer, rightAnswer);
};

export const gameInit = (countRightAnswer, gameName) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let round = 0;
  let isRigthAnswer = true;
  while (round < countRightAnswer && isRigthAnswer) {
    if (gameName === 'calcGame') {
      isRigthAnswer = calcQuestion(round);
    } else if (gameName === 'evenGame') {
      isRigthAnswer = evenQuestion();
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
