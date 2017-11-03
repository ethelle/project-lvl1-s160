import { getAnswer, getRandom, gameInit } from '..';

const isEven = (num) => {
  const res = (num % 2) === 0;
  return res;
};

export const getEvenQuestion = () => {
  const question = getRandom(1, 50);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return getAnswer(question, rightAnswer);
};

export const runEvenGame = () => {
  const evenRule = 'Answer \'yes\' if number even otherwise answer \'no\'.';
  const countRightAnswer = 3;
  gameInit(evenRule, countRightAnswer, getEvenQuestion);
};
