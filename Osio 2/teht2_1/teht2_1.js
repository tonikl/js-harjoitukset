'use strict';
let numbers = [];
for (let x = 0; x < 5; x++){
  numbers[x] = parseInt(prompt(`Give number ${x + 1}` ));
}
for (let x = 4; x >= 0; x--){
  console.log(numbers[x])
}
console.log(numbers)