import generateRandomNumber from "../utilities/generateRandomNumber";
import generateFleet from "./generateFleet";
import playerList from "./playerList";

function attackValidation(player, x, y) {
  if (
    x >= player.getGameboard().getX() ||
    y >= player.getGameboard().getY() ||
    !x ||
    !y
  )
    return false;

  switch (player.getGameboard().getBoard()[x][y]) {
    case 1:
    case 2:
      return false;

    default:
      return true;
  }
}

function executeAttack(player, target, x, y) {
  const playerName = player.getName();
  const targetName = target.getName();
  const targetBoard = target.getGameboard();

  player.attack(target, x, y);

  alert(`${playerName} attack ${x},${y}`);
  alert(`${playerName}'s attack ${targetBoard.getAttackMessage()}`);

  if (targetBoard.getSunkMessage())
    alert(`${targetName}'s ${targetBoard.getSunkMessage()}`);

  if (target.getLose() === true) {
    alert(`all of ${targetName}'s ship has been sunk`);
  }
}

function playerTurn(player, computer) {
  const name = player.getName();

  let x = 0;
  let y = 0;
  let isValid = false;

  alert(`${name}'s turn!`);

  while (!isValid) {
    x = prompt("enter x coordinate:");
    y = prompt("enter y coordinate:");

    isValid = attackValidation(computer, x, y);

    if (!isValid) alert("invalid location, try again!");
  }

  executeAttack(player, computer, x, y);
}

function computerTurn(computer, player) {
  const name = computer.getName();

  let x = 0;
  let y = 0;
  let isValid = false;

  alert(`${name}'s turn!`);

  while (!isValid) {
    x = generateRandomNumber(3);
    y = generateRandomNumber(3);

    isValid = attackValidation(player, x, y);
  }

  executeAttack(computer, player, x, y);
}

function playRound(players, round) {
  let counter = 0;
  let gameOver = false;

  while (counter < round && !gameOver) {
    playerTurn(players[0], players[1]);
    gameOver = players[1].getLose();
    if (gameOver) break;

    computerTurn(players[1], players[0]);
    gameOver = players[0].getLose();
    if (gameOver) break;

    counter += 1;
  }
}

function gameController() {
  const boardSize = 5;
  const players = playerList(boardSize);

  generateFleet(players[0], boardSize);
  generateFleet(players[1], boardSize);

  // playRound(players, 3);

  players.forEach((player) => {
    console.log(player.getGameboard().getBoard());
  });
}

export default gameController;
