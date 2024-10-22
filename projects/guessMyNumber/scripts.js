"use strict";

// console.log(document.querySelector(".msg").textContent);

// document.querySelector(".msg").textContent = "🎉 Correct Number!";

// document.querySelector('.result').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (msg) {
  document.querySelector(".msg").textContent = msg;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when no input
  if (!guess) {
    // document.querySelector(".msg").textContent
    displayMsg("No Number!");
    //when player wins
  } else if (guess === secretNumber) {
    displayMsg("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "10rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "📉 Too high!" : "📈 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".msg").textContent = "📉 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".msg").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".msg").textContent = "📈 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".msg").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "5rem";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    displayMsg("Start Guessing...");
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".guess").value = "";
  });
});

// CODING CHALLENGE
