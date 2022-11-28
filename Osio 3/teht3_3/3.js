'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let x = 0; x < names.length; x++) {
    document.getElementById("target").innerHTML += "<li>" + (names[x]) + "</li>";
}