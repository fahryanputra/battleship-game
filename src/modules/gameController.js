import Player from "./Player";

function pickRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

function createPlayer(array, name, isPlayer = false) {
  const player = new Player(name, isPlayer);
  array.push(player);
}

function addShip(player, name, length = 1) {
  player.getGameboard().addShip(name, length);
}

function placeShip(player, name, x, y, axis = 0) {
  player.getGameboard().placeShip(name, x, y, axis);
}

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
    x = pickRandomNumber(3);
    y = pickRandomNumber(3);

    isValid = attackValidation(player, x, y);
  }

  executeAttack(computer, player, x, y);
}

function gameController() {
  const players = [];
  createPlayer(players, "player", true);
  createPlayer(players, "computer");

  addShip(players[0], "destroyer", 2);
  placeShip(players[0], "destroyer", 0, 0, 0);
  addShip(players[1], "destroyer", 2);
  placeShip(players[1], "destroyer", 0, 0, 0);

  let round = 0;

  while (round < 3) {
    playerTurn(players[0], players[1]);
    computerTurn(players[1], players[0]);

    round += 1;
  }

  console.log(players[0].getGameboard().getBoard());
  console.log(players[1].getGameboard().getBoard());
}

export default gameController;
