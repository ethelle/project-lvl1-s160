import { getRandom, gameInit } from '..';

const getSumDigits = (num) => {
  const strNum = String(num);
  const countDigits = strNum.length;
  let sumDigits = 0;
  for (let i = 0; i < countDigits; i += 1) {
    sumDigits += Number(strNum[i]);
  }
  return sumDigits;
};

const balance = (num) => {
  const sumDigits = getSumDigits(num);
  const countDigits = String(num).length;
  const digit1 = Math.floor(sumDigits / countDigits);
  const digit2 = digit1 + 1;
  const digit2Count = sumDigits % countDigits;
  const digit1Count = countDigits - digit2Count;
  const resultStr = String(digit1).repeat(digit1Count) + String(digit2).repeat(digit2Count);
  return resultStr;
};

export const getBalanceQuestion = () => {
  const number = getRandom(1, 9999);
  const question = `${number}`;
  const rightAnswer = balance(number);
  const res = [];
  res.push(question);
  res.push(rightAnswer);
  return res;
};

export const runBalanceGame = () => {
  const balanceRule = 'Balance the given number.';
  gameInit(balanceRule, getBalanceQuestion);
};
