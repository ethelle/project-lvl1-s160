#!/usr/bin/env node
import { welcome, gameInit } from '..';

welcome('Welcome to the Brain Games!\nWhat is the result of the expression?');
const countRightAnswer = 3;
const gameName = 'calcGame';
gameInit(countRightAnswer, gameName);
