"use strict";

// DOM Manipulation
document.querySelector(".message").textContent = "Correct Number!";
console.log(
  (document.querySelector(".message").textContent = "Correct Number!")
);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 14;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// Event handlers/listeners
