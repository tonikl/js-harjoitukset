'use strict';
document.getElementById("target").innerHTML = "<li>First item</li>\n" +
    "<li>Second item</li>\n" +
    "<li>Third item</li>"

let styling = document.getElementById("target");
styling.classList.add("my-list");
