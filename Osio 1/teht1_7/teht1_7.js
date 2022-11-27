'use strict';
function diceRoller() {
  let answer1 = document.querySelector('#target');
  let answer2 = document.querySelector('#target2');
  let dices = parseInt(prompt('How many dices you want to roll?'));
  let list = [];

  function dice() {
    for (let i = 0; i < dices; i++) {
      list.push(Math.floor(Math.random() * 6) + 1);
    }
  }
  dice();
  answer1.innerHTML = `Numbers on the dice: ${list}`;
  let sum = 0;
  for (let i in list) {
    sum += list[i];
  }
  answer2.innerHTML = `Sum: ${sum}`
}