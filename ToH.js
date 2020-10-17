//three pegs for discs to travel to and from
//four discs, smallest to largest
//end result must be smallest to largest, can't be completed on original peg
//don't allow user to put larger disc on top of smaller disc

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = () => {
  // Your code here

}

const isLegal = () => {
  // Your code here

}

const checkForWin = () => {
  // Your code here

}

const towersOfHanoi = (startStack, endStack) => {
  // Your code here

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();