//HTML ELEMENTS
//buttons
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
//text/img
const userChoiceEl = document.getElementById("userChoiceTxt");
const compChoiceEl = document.getElementById("compChoiceTxt");
const userImgEl = document.getElementById("userChoiceImg");
const compImgEl = document.getElementById("compChoiceImg");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const tieScoreEl = document.getElementById("tieScore");
const winnerDisplayEl = document.getElementById("winnerDisplay");

//LOCAL STORAGE
const savedUserScore = localStorage.getItem("userScore");
const savedCompScore = localStorage.getItem("compScore");
const savedTieScore = localStorage.getItem("tieScore");
//GLOBAL VARIABLES
let userChoice = "";
let userScore = 0 || userScore;
let compScore = 0 || compScore;
let tieScore = 0 || tieScore;

//IMG ARRAYS
const rockImages = [
  "./assets/rocks/pexels-adrien-olichon-2931246.jpg",
  "./assets/rocks/pexels-anthony-133372.jpg",
  "./assets/rocks/pexels-edward-eyer-811838.jpg",
  "./assets/rocks/pexels-johnny-mckane-237950.jpg",
  "./assets/rocks/pexels-martins-krastins-838981.jpg",
  "./assets/rocks/pexels-msvr-997704.jpg",
  "./assets/rocks/pexels-peter-döpper-2363901.jpg",
  "./assets/rocks/pexels-pixabay-161702.jpg",
  "./assets/rocks/pexels-pixabay-164693.jpg",
  "./assets/rocks/pexels-pixabay-164758.jpg",
  "./assets/rocks/pexels-scott-webb-1029604.jpg",
];
const paperImages = [
  "./assets/papers/pexels-angela-roma-7319290.jpg",
  "./assets/papers/pexels-anna-nekrashevich-8533218.jpg",
  "./assets/papers/pexels-anna-nekrashevich-8533264.jpg",
  "./assets/papers/pexels-iconcom-479444.jpg",
  "./assets/papers/pexels-karolina-grabowska-4032977.jpg",
  "./assets/papers/pexels-pixabay-531844.jpg",
  "./assets/papers/pexels-pnw-production-8490297.jpg",
];
const scissorImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpf3NpDnSMhOXphV8_IG1rdOFsFM9u6szXQ&usqp=CAU",
  "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/66366-20th-century-fox-home-entertainment-25ba70d9738e8c22a0e996efaa52d5fa.jpg",
  "./assets/scissors/pexels-karolina-grabowska-4226896.jpg",
  "./assets/scissors/pexels-karolina-grabowska-4226904.jpg",
  "./assets/scissors/pexels-karolina-grabowska-5412469.jpg",
  "./assets/scissors/pexels-mike-211710.jpg",
  "./assets/scissors/pexels-nacho-lledò-3990146.jpg",
  "./assets/scissors/pexels-nick-demou-1319460.jpg",
  "./assets/scissors/pexels-pavel-danilyuk-6461489.jpg",
];

//helper functions
function randomImg(arr) {
  let randoNum = Math.floor(Math.random() * arr.length);
  return arr[randoNum];
}

//pageload "middleware"
function pageload() {
  userScoreEl.textContent = `User Score: ${userScore}`;
  compScoreEl.textContent = `Opponent Score: ${compScore}`;
  tieScoreEl.textContent = `Ties: ${tieScore}`;
}
pageload();

const createCompChoice = function () {
  const choiceNum = Math.floor(Math.random() * 3);
  const choiceArr = ["Rock", "Paper", "Scissors"];
  compChoiceEl.textContent = choiceArr[choiceNum];
  if (choiceArr[choiceNum] === "Rock") {
    compImgEl.src = randomImg(rockImages);
  } else if (choiceArr[choiceNum] === "Paper") {
    compImgEl.src = randomImg(paperImages);
  } else {
    compImgEl.src = randomImg(scissorImages);
  }
};

const rockHandler = function (e) {
  e.preventDefault();
  userChoice = "Rock";
  userChoiceEl.textContent = "Rock";
  userImgEl.src = randomImg(rockImages);
  gameHandler();
};

const paperHandler = function (e) {
  e.preventDefault();
  userChoice = "Paper";
  userChoiceEl.textContent = "Paper";
  userImgEl.src = randomImg(paperImages);
  gameHandler();
};

const scissorsHandler = function (e) {
  e.preventDefault();
  userChoice = "Scissors";
  userChoiceEl.textContent = "Scissors";
  userImgEl.src = randomImg(scissorImages);
  gameHandler();
};

const gameHandler = function () {
  createCompChoice();
  let compChoice = compChoiceEl.textContent;
  // Win scenarios
  if (
    (userChoice === "Rock" && compChoice === "Scissors") ||
    (userChoice === "Paper" && compChoice === "Rock") ||
    (userChoice === "Scissors" && compChoice === "Paper")
  ) {
    ++userScore;
    userScoreEl.textContent = `User Score: ${userScore}`;
    winnerDisplayEl.textContent = "You win!";
  }
  // Lose scenarios
  if (
    (compChoice === "Rock" && userChoice === "Scissors") ||
    (compChoice === "Paper" && userChoice === "Rock") ||
    (compChoice === "Scissors" && userChoice === "Paper")
  ) {
    ++compScore;
    compScoreEl.textContent = `Opponent Score: ${compScore}`;
    winnerDisplayEl.textContent = "You lose!";
  }
  // Tie scenarios
  if (
    (userChoice === "Rock" && compChoice === "Rock") ||
    (userChoice === "Paper" && compChoice === "Paper") ||
    (userChoice === "Scissors" && compChoice === "Scissors")
  ) {
    ++tieScore;
    tieScoreEl.textContent = `Ties: ${tieScore}`;
    winnerDisplayEl.textContent = "It's a tie!";
  }
};

rockBtn.addEventListener("click", rockHandler);
paperBtn.addEventListener("click", paperHandler);
scissorsBtn.addEventListener("click", scissorsHandler);
