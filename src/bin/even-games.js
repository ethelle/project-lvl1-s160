#!/usr/bin/env node
import { welcome, gameInit } from '..';

welcome('Welcome to the Brain Games!\nAnswer \'yes\' if number even otherwise answer \'no\'.');
const countRightAnswer = 3;
gameInit(countRightAnswer);
