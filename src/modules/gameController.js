import generateFleet from "./generateFleet";
import createPlayer from "./createPlayer";
import generateRandomNumber from "../utilities/generateRandomNumber";

const player = createPlayer("player");
const computer = createPlayer("computer", true);
const players = [player, computer];

let i = 0;
let j = 0;

const picked = [];

function initializeGame(game) {
  game.setPlayers(players);
  game.setTurn(players[0]);

  players.forEach((player) => {
    generateFleet(player);
  });
}

function attackTile(player, x, y) {
  const gameboard = player.getGameboard();

  gameboard.receiveAttack(x, y);
  console.log(`attack ${player.getName()} at ${x}, ${y}`);

  if (gameboard.getSunkMessage())
    alert(`${player.getName()}'s ${gameboard.getSunkMessage()}`);
  if (gameboard.getIsAllShipSunk())
    alert(`All ${player.getName()}'s ship has been sunk.`);
}

function turnController(x, y) {
  attackTile(computer, x, y);

  do {
    i = generateRandomNumber(10);
    j = generateRandomNumber(10);
  } while (picked.includes(`${i}, ${j}`));

  picked.push(`${i}, ${j}`);

  attackTile(player, i, j);

  const parent = document.querySelector(`.board.player .grid-${i}-${j}`);
  parent.classList.add(player.getGameboard().getAttackMessage());
}

export { initializeGame, turnController };
