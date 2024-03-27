import generateFleet from "./generateFleet";
import turnController from "./turnController";

function createNotification(message) {
  const notification = document.querySelector(".notification");
  notification.textContent = message;
}

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
      const notification = document.querySelector(".notification");
      notification.textContent = "";

      if (
        !container.classList.contains("miss") &&
        !container.classList.contains("hit")
      ) {
        turnController(game, x, y);
      }
      container.classList.add(gameboard.getAttackMessage());

      if (gameboard.getSunkMessage()) {
        createNotification(gameboard.getSunkMessage());
      }
      if (gameboard.getIsAllShipSunk()) {
        createNotification(`All of ${player.getName()}'s ship has been sunk.`);

        const parentNode = container.parentNode;
        parentNode.style["pointer-events"] = "none";
      }
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

function renderPlayerName(name, tag) {
  const text = document.createElement(tag);
  text.textContent = name;

  return text;
}

function renderGameboard(game) {
  const players = game.getPlayers();
  let boardContainer = document.createElement("div");

  boardContainer.classList.add("game-board");

  players.forEach((player) => {
    boardContainer.appendChild(renderPlayerName(player.getName(), "h1"));
    boardContainer.appendChild(createBoard(game, player));
  });

  let container = document.createElement("div");
  container.appendChild(boardContainer);

  const notificationText = document.createElement("p");
  notificationText.classList.add("notification");
  container.appendChild(notificationText);

  const randomButton = document.createElement("button");
  randomButton.textContent = "Randomize";
  randomButton.addEventListener("click", () => {
    window.location.reload();
  });
  container.appendChild(randomButton);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

export default renderGameboard;
