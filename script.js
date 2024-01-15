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
const body = document.querySelector("body");

const displayMessage = function (message) {
  messageDisplay.textContent = message;
};

btnAgain.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = "";
  score = 20;
  number.textContent = "?";
  scoreDisplay.textContent = score;
  displayMessage("Start guessing... (between 1 and 20)");
  body.style.backgroundColor = "#212121";
});

const checkNumber = function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage("Can't check! No number!");
  } else if (guess === randomNumber) {
    displayMessage("Correct number!");
    body.style.backgroundColor = "#4caf50";
    number.textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too high!" : "Too low!");
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage("You lost the game");
      body.style.backgroundColor = "#c62828";
      scoreDisplay.textContent = 0;
    }
  }
};

btnCheck.addEventListener("click", checkNumber);

document.addEventListener("keydown", function (e) {
  if (Number(guessInput.value) || e.key === "Enter") {
    checkNumber();
  }
});
