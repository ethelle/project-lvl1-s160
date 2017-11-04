import { getRandom, gameInit } from '..';

const isEven = (num) => {
  const res = (num % 2) === 0;
  return res;
};

export const getEvenQuestion = () => {
  const question = getRandom(1, 50);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const res = [];
  res.push(question);
  res.push(rightAnswer);
  return res;
};

export const runEvenGame = () => {
  const evenRule = 'Answer \'yes\' if number even otherwise answer \'no\'.';
  gameInit(evenRule, getEvenQuestion);
};
