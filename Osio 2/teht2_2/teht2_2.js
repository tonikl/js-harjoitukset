'use strict';

let target = document.querySelector('#target');
let amount = parseInt(prompt('How many participants?'));
let participants = [];

for (let x = 0; x < amount; x++) {
  participants[x] = prompt('Name:');
}

let list = '<ol>';
for (let x = 0; x < amount; x++) {
  list += '<li>';
  list += participants[x];
  list += '</li>';
}
list += '</ol>';
document.querySelector('#target')
target.innerHTML = list;