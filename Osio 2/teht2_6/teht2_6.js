'use strict';
let target = document.querySelector('#target')

let html = '<ul>'
let dice = Math.floor(Math.random() * 6) + 1;

function roll() {
    dice = Math.floor(Math.random() * 6) + 1;
    html += '<li>'
    html += dice
    html += '</li>'
}

while (dice !== 6) {
    roll();
}

html += '</ul>'
target.innerHTML = html