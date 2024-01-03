"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageDisplay = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const guessInput = document.querySelector(".guess");
const highscoreDisplay = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const number = document.querySelector(".number");

btnAgain.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = Number(guessInput.value);
  guessInput.value = "";
  score = 20;
  number.textContent = "?";
  scoreDisplay.textContent = score;
  messageDisplay.textContent = "Start guessing... (between 1 and 20)";
  document.querySelector("body").style.backgroundColor = "#212121";
});

btnCheck.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    messageDisplay.textContent = "Can't check! No number!";
  } else if (guess === randomNumber) {
    messageDisplay.textContent = "Correct number!";
    document.querySelector("body").style.backgroundColor = "#4caf50";
    document.querySelector(".number").textContent = randomNumber;
  } else if (guess !== randomNumber) {
    if (score > 1) {
      messageDisplay.textContent =
        guess > randomNumber ? "Too high!" : "Too low!";
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "#c62828";
      scoreDisplay.textContent = 0;
    }
  }
});
