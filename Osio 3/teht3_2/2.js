'use strict';
const node = document.createElement("li");
const textnode = document.createTextNode("First item")
node.appendChild(textnode)
document.getElementById("target").appendChild(node);

const node2 = document.createElement("li");
const textnode2 = document.createTextNode("Second item")
node2.appendChild(textnode2)
document.getElementById("target").appendChild(node2);

const node3 = document.createElement("li");
const textnode3 = document.createTextNode("Third item")
node3.appendChild(textnode3)
document.getElementById("target").appendChild(node3);

const second = document.getElementsByTagName("li")[1];

second.classList.add("my-item");