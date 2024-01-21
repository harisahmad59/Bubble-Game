var timer = 30;
var score = 0;
var hitVal = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

function newHit() {
  hitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").textContent = hitVal;
}

function generateBubbles() {
  var bubbles = "";

  for (var i = 0; i < 152; i++) {
    var number = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${number}</div>`; // += will store previous generated bubbles and add new also, if we use = only then it will replace previous bubble and result will be only one bubble
  }

  document.querySelector(".container").innerHTML = bubbles;
}

function runTimer() {
  var timerVal = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timerVal);
      document.querySelector(".container").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document
  .querySelector(".container")
  .addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent); //Number converts string to number
    if (clickedNum === hitVal) {
      increaseScore();
      generateBubbles();
      newHit();
    }
  });

runTimer();
generateBubbles();
newHit();
