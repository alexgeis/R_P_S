const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const userChoice = "";

const createCompChoice = function () {
  const choiceNum = Math.floor(Math.random() * 3);
  const choiceArr = ["Rock", "Paper", "Scissors"];
  return choiceArr[choiceNum];
};
createCompChoice();

const rockHandler = function (e) {
  e.preventDefault();
};

rockBtn.addEventListener("click", rockHandler);
paperBtn.addEventListener("click", paperHandler);
scissorsBtn.addEventListener("click", scissorsHandler);
