import { getRandom, gameInit } from '..';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrimeQuestion = () => {
  const range = 99;
  const number = getRandom(1, range);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const res = [];
  res.push(question);
  res.push(rightAnswer);
  return res;
};

export const runPrimeGame = () => {
  const primeRule = 'Answer \'yes\' if number prime otherwise answer \'no\'.';
  gameInit(primeRule, getPrimeQuestion);
};
