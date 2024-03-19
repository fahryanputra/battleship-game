import Game from "./Game";

function renderGameboard(game) {
  const boardContainer = document.createElement("div");

  game.getPlayers().forEach((player) => {
    const board = player.getGameboard().getBoard();

    console.log(`${player.getName()}'s board:`);
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        console.log(`${i}, ${j}`);
      }
    }
  });

  const container = document.createElement("div");
  container.appendChild(boardContainer);

  const content = document.querySelector(".content");

  return content.appendChild(container);
}

export default renderGameboard;
