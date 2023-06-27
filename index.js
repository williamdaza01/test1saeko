let playerScore = 0;
let computerScore = 0;

const showResultModal = (result, playerChoice, computerChoice) => {
  const toast = document.getElementById("toast");
  const message = toast.querySelector(".message");
  const playerIcon = toast.querySelector(".player-icon");
  const computerIcon = toast.querySelector(".computer-icon");

  message.textContent = result;
  playerIcon.className = `player-icon fa-regular fa${playerChoice}`;
  computerIcon.className = `computer-icon fa-regular fa${computerChoice}`;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1000);
};

const updatePlayerScore = () => {
  document.getElementById("player-score").textContent = playerScore;
};

const updateComputerScore = () => {
  document.getElementById("computer-score").textContent = computerScore;
};

const play = (playerChoice) => {
  const choices = {
    rock: "-hand-back-fist",
    paper: "-hand",
    scissors: "-hand-scissors",
  };

  const choiceKeys = Object.keys(choices);
  const computerChoice =
    choiceKeys[Math.floor(Math.random() * choiceKeys.length)];
  const choiceIconPlayer = choices[playerChoice];
  const choiceIconPc = choices[computerChoice];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Empate";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "¡Ganaste!";
    playerScore++;
    updatePlayerScore();
  } else {
    result = "Perdiste :(";
    computerScore++;
    updateComputerScore();
  }

  showResultModal(result, choiceIconPlayer, choiceIconPc);
};
