import { getRandom, gameInit } from '..';

export const getCalcQuestion = (order) => {
  const randomNum1 = getRandom(1, 10);
  const randomNum2 = getRandom(1, 10);
  let rightAnswer = 0;
  let question = '';
  switch (order % 3) {
    case 1:
      question = `${randomNum1} + ${randomNum2}`;
      rightAnswer = randomNum1 + randomNum2;
      break;
    case 2:
      question = `${randomNum1} - ${randomNum2}`;
      rightAnswer = randomNum1 - randomNum2;
      break;
    case 0:
      question = `${randomNum1} * ${randomNum2}`;
      rightAnswer = randomNum1 * randomNum2;
      break;
    default:
      question = `${randomNum1} + ${randomNum2}`;
      rightAnswer = randomNum1 + randomNum2;
  }
  const res = [];
  res.push(question);
  res.push(rightAnswer);
  return res;
};

export const runCalcGame = () => {
  const calcRule = 'What is the result of the expression?';
  gameInit(calcRule, getCalcQuestion);
};
