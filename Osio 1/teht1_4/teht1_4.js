'use strict';
const name = prompt('Anna nimesi:')
const room = Math.floor(Math.random() * 4) + 1;
if (room === 1) {
  document.querySelector('#target').innerHTML = `${name}, you are Gryffindor!`;
}
else if (room === 2) {
  document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw!`;
}
else if (room === 3) {
  document.querySelector('#target').innerHTML = `${name}, you are Huffelpuff!`;
}
else if (room === 4) {
  document.querySelector('#target').innerHTML = `${name}, you are Slytherin!`;
}