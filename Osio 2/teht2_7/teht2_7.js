'use strict';

let target = document.querySelector('#target')
let html = '<ul>'
let dice = Math.floor(Math.random() * 21) + 1;

function roll(dieface) {
    dice = Math.floor(Math.random() * dieface) + 1;
    html += '<li>'
    html += dice
    html += '</li>'
}

while (dice !== 21) {
    roll(21);
}

html += '</ul>'
target.innerHTML = html