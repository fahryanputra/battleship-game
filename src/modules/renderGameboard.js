import {
  capitalizeEachWord,
  createIcon,
  createText,
} from "../utilities/utility";
import generateFleet from "./generateFleet";
import turnController from "./turnController";

function announceMessage(className, message) {
  const notification = document.querySelector(`.${className}`);
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

      game.getPlayers().forEach((element) => {
        if (element.getGameboard().getSunkMessage()) {
          announceMessage(
            "notification",
            `${capitalizeEachWord(element.getName())}'s ${element.getGameboard().getSunkMessage()}`,
          );
        }

        if (element.getGameboard().getIsAllShipSunk()) {
          announceMessage(
            "notification",
            `All of ${capitalizeEachWord(player.getName())}'s ship has been sunk.`,
          );

          const parentNode = container.parentNode;
          parentNode.style["pointer-events"] = "none";

          const winner = game
            .getPlayers()
            .filter((name) => name.getName() !== element.getName());
          announceMessage(
            "announcement",
            `${capitalizeEachWord(winner[0].getName())} wins!`,
          );
        }
      });
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
    const container = document.createElement("div");

    container.appendChild(
      renderPlayerName(capitalizeEachWord(player.getName()), "h1"),
    );
    container.appendChild(createBoard(game, player));

    boardContainer.appendChild(container);
  });

  let container = document.createElement("div");
  container.appendChild(boardContainer);

  const resetButton = document.createElement("button");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
  const icon = createIcon("restart_alt");
  const text = createText("Reset");
  resetButton.appendChild(icon);
  resetButton.appendChild(text);

  container.appendChild(resetButton);

  const notificationText = document.createElement("p");
  notificationText.classList.add("notification");
  container.appendChild(notificationText);

  const announcementText = document.createElement("p");
  announcementText.classList.add("announcement");
  container.appendChild(announcementText);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

export default renderGameboard;
