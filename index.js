function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
  
    if (playerChoice === computerChoice) {
      result = "Empate";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "¡Ganaste!";
    } else {
      result = "Perdiste :(";
    }
  
    document.getElementById("result").innerText = `Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;
  }
  