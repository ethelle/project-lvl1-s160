import { getRandom, gameInit } from '..';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return gcd(num2, num1 % num2);
};

export const getGcdQuestion = () => {
  const number1 = getRandom(1, 50);
  const number2 = getRandom(1, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = gcd(number1, number2);
  const res = [];
  res.push(question);
  res.push(rightAnswer);
  return res;
};

export const runGcdGame = () => {
  const gcdRule = 'Find the greatest common divisor of given numbers.';
  gameInit(gcdRule, getGcdQuestion);
};
