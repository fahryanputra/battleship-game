import turnController from "./turnController";

function createCell(game, player, x, y) {
  const gameboard = player.getGameboard();
  const board = gameboard.getBoard();
  const container = document.createElement("div");

  container.classList.add("cell");
  container.classList.add(`grid-${x}-${y}`);

  if (board[x][y] != 0) {
    container.classList.add("filled");
  }

  if (player.getIsBot() === true) {
    container.addEventListener("click", () => {
      if (
        !container.classList.contains("miss") &&
        !container.classList.contains("hit")
      ) {
        turnController(game, x, y);
      }
      container.classList.add(gameboard.getAttackMessage());
    });
  }

  return container;
}

function createBoard(game, player) {
  const gameboard = player.getGameboard();
  const board = gameboard.getBoard();

  const container = document.createElement("div");
  container.classList.add("board");
  container.classList.add(player.getName());
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = createCell(game, player, i, j);
      container.appendChild(cell);
    }
  }

  return container;
}

function renderGameboard(game) {
  const players = game.getPlayers();
  const boardContainer = document.createElement("div");

  boardContainer.classList.add("game-board");

  players.forEach((player) => {
    boardContainer.appendChild(createBoard(game, player));
  });

  const container = document.createElement("div");
  container.appendChild(boardContainer);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

export default renderGameboard;
