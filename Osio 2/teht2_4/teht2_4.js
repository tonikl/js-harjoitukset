'use strict';

let target = document.querySelector('#target')
let numbers = [];
let number = prompt('Give a number')
numbers.push(number)

while (number !== 0) {
  number = prompt('Give another number')
    if (number == 0){
      break
    }
    else {
        numbers.push(number)
    }
}

numbers.sort(function(a, b){return b-a})
target.innerHTML = numbers