function playerAttack(container, player, x, y) {
  const gameboard = player.getGameboard();

  gameboard.receiveAttack(x, y);
  if (gameboard.getAttackResult() === 0) {
    container.classList.add("miss");
  } else {
    container.classList.add("hit");
  }

  if (gameboard.getSunkMessage()) alert(gameboard.getSunkMessage());
  if (gameboard.getIsAllShipSunk())
    alert(`All ${player.getName()}'s ship has been sunk.`);
}

function createCell(player, x, y) {
  const board = player.getGameboard().getBoard();
  const container = document.createElement("div");

  container.classList.add("cell");

  if (board[x][y] != 0) {
    container.classList.add("filled");
  }

  if (player.getIsBot() === true) {
    container.addEventListener("click", () => {
      playerAttack(container, player, x, y);
    });
  }

  return container;
}

function createBoard(player) {
  const gameboard = player.getGameboard();
  const board = gameboard.getBoard();

  const container = document.createElement("div");
  container.classList.add("board");
  container.classList.add(player.getName());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = createCell(player, i, j);
      container.appendChild(cell);
    }
  }

  return container;
}

function renderGameboard(game) {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("game-board");

  game.getPlayers().forEach((player) => {
    boardContainer.appendChild(createBoard(player));
  });

  const container = document.createElement("div");
  container.appendChild(boardContainer);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

export default renderGameboard;
