import readlineSync from 'readline-sync';

export const welcome = (message) => {
  console.log(message);
};

export const questionName = (rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

export const gameInit = (rule, countRightAnswer, getQestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let round = 0;
  let isRigthAnswer = true;
  while (round < countRightAnswer && isRigthAnswer) {
    isRigthAnswer = getQestion();
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
