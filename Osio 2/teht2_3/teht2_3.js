'use strict';

let target = document.querySelector('#target');
let doggos = [];

for (let x = 0; x < 6; x++){
  doggos[x] = prompt(`Give a name to dog nro. ${x + 1}`)
}
doggos.sort().reverse();
console.log(doggos)

let list = '<ul>';
for (let x = 0; x < 6; x++) {
  list += '<li>';
  list += doggos[x];
  list += '</li>';
}
list += '</ul>';

document.querySelector('#target')
target.innerHTML = list