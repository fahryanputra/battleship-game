function createBoard(player) {
  const board = player.getGameboard().getBoard();

  const container = document.createElement("div");
  container.classList.add("board");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
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
