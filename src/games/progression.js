import { getRandom, gameInit } from '..';

const generateProgression = (firstNum, step, missNum) => {
  const progressionLength = 10;
  let resStr = '';
  let currentNum = firstNum;
  let answer = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missNum) {
      answer = currentNum;
      resStr += '.. ';
    } else {
      resStr += `${currentNum} `;
    }
    currentNum += step;
  }
  const res = [];
  res.push(resStr);
  res.push(answer);
  return res;
};

export const getProgressionQuestion = () => {
  const firstNum = getRandom(1, 10);
  const step = getRandom(2, 7);
  const missNum = getRandom(2, 10);
  const res = generateProgression(firstNum, step, missNum);
  return res;
};

export const runProgressionGame = () => {
  const calcRule = 'What number is missing in this progression?';
  gameInit(calcRule, getProgressionQuestion);
};
