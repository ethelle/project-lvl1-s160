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

export const gameInit = (countRightAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  let round = 0;
  let isRigthAnswer = true;
  while (round < countRightAnswer && isRigthAnswer) {
    const randomNum = getRandom(1, 50);
    const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      round += 1;
      console.log('Correct!');
    } else {
      isRigthAnswer = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  if (round === countRightAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};
