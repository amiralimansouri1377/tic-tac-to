const gamePads = document.querySelectorAll('.game-pad');
const gameBoard = document.querySelector('.game-board');
const gameInfo = document.querySelector('.game-info');
const startBtn = document.querySelector('.btn-start');
let gamePattern = new Array(9);
gameInfo.textContent = 'Player One Trun:';

// true => X and false => O
let gameTurn = true;

startBtn.addEventListener('click', function () {
  this.style.display = 'none';
  gameInfo.style.display = 'block';
  gameBoard.style.display = 'grid';
});

gamePads.forEach(gamePad => {
  gamePad.addEventListener('click', function () {
    const playerCh = document.createElement('span');

    playerCh.classList.add('game-ch');
    if (!gamePattern[this.dataset.pos]) {
      if (gameTurn) {
        playerCh.classList.add('player-x');
        playerCh.textContent = 'X';
        gamePattern[this.dataset.pos] = 'X';
      } else {
        playerCh.classList.add('player-y');
        playerCh.textContent = 'O';
        gamePattern[this.dataset.pos] = 'O';
      }
      console.log(gamePattern);
      gameTurn = !gameTurn;
      this.appendChild(playerCh);
    }

    if (checkWin() === 'X') {
      gameBoard.style.display = 'none';
      gameInfo.textContent = 'Player One Won';
      startBtn.style.display = 'block';
      gameTurn = true;
      claerGameBoard();
      gamePattern = new Array(9);
      return;
    } else if (checkWin() === 'O') {
      gameBoard.style.display = 'none';
      gameInfo.textContent = 'Player Two Won';
      startBtn.style.display = 'block';
      gameTurn = false;
      claerGameBoard();
      gamePattern = new Array(9);
      return;
    } else if (checkWin() === 'Draw') {
      gameBoard.style.display = 'none';
      gameInfo.textContent = 'Draw';
      startBtn.style.display = 'block';
      claerGameBoard();
      gamePattern = new Array(9);
      gameTurn = true;
      return;
    }
    gameInfo.textContent = `Player ${gameTurn ? 'One' : 'Two'} Truns: `;
  });
});

function checkWin() {
  if (
    (gamePattern[0] === 'X' &&
      gamePattern[1] === 'X' &&
      gamePattern[2] === 'X') ||
    (gamePattern[0] === 'X' &&
      gamePattern[3] === 'X' &&
      gamePattern[6] === 'X') ||
    (gamePattern[1] === 'X' &&
      gamePattern[4] === 'X' &&
      gamePattern[7] === 'X') ||
    (gamePattern[2] === 'X' &&
      gamePattern[5] === 'X' &&
      gamePattern[8] === 'X') ||
    (gamePattern[3] === 'X' &&
      gamePattern[4] === 'X' &&
      gamePattern[5] === 'X') ||
    (gamePattern[6] === 'X' &&
      gamePattern[7] === 'X' &&
      gamePattern[8] === 'X') ||
    (gamePattern[0] === 'X' &&
      gamePattern[4] === 'X' &&
      gamePattern[8] === 'X') ||
    (gamePattern[2] === 'X' && gamePattern[4] === 'X' && gamePattern[6] === 'X')
  ) {
    return 'X';
  } else if (
    (gamePattern[0] === 'O' &&
      gamePattern[1] === 'O' &&
      gamePattern[2] === 'O') ||
    (gamePattern[0] === 'O' &&
      gamePattern[3] === 'O' &&
      gamePattern[6] === 'O') ||
    (gamePattern[1] === 'O' &&
      gamePattern[4] === 'O' &&
      gamePattern[7] === 'O') ||
    (gamePattern[2] === 'O' &&
      gamePattern[5] === 'O' &&
      gamePattern[8] === 'O') ||
    (gamePattern[3] === 'O' &&
      gamePattern[4] === 'O' &&
      gamePattern[5] === 'O') ||
    (gamePattern[6] === 'O' &&
      gamePattern[7] === 'O' &&
      gamePattern[8] === 'O') ||
    (gamePattern[0] === 'O' &&
      gamePattern[4] === 'O' &&
      gamePattern[8] === 'O') ||
    (gamePattern[2] === 'O' && gamePattern[4] === 'O' && gamePattern[6] === 'O')
  ) {
    return 'O';
  }

  for (const el of gamePattern) {
    if (!el) {
      return;
    }
  }
  return 'Draw';
}

function claerGameBoard() {
  gamePads.forEach(gamPad => {
    gamPad.firstElementChild?.remove();
  });
}
