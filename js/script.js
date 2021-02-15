const resultDom = document.getElementById('result');
const results = {
  player: 0,
  computer: 0
}

const playGame = function(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove)
}

const getMoveName = function(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  }
}

const displayResult = function(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    showResult('player');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    showResult('player');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    showResult('player');
  } else if (argComputerMove == argPlayerMove) {
    showResult('Remis!');
  } else {
    showResult('computer');
  }
}

const showResult = function(winner) {
  if (winner == 'computer') {
    printMessage('Ty przegrałeś!');
    results.computer++;
  } else if (winner == 'player') {
    printMessage('Ty wygrywasz!');
    results.player++;
  } else {
    printMessage('Remis!');
  }
  resultDom.innerHTML = `${results.computer} : ${results.player}`
}

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});
