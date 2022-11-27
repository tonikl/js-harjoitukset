'use strict';
let target = document.querySelector('#target');
function squareroot() {
  const query = confirm('Should i calculate the square root?');
  if (query === true) {
    let number = parseInt(prompt('Give a number to calculate square root:'));
    if (number < 0) {
      target.innerHTML = `The square root of a negative number is not defined`;
    }
    let answer = Math.sqrt(number);
    target.innerHTML = `The square root of ${number} is: ${answer}`;
  } else {
    target.innerHTML = `The square root is not calculated`;
  }
}