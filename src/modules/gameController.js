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
  if (x >= player.getGameboard().getX() || y >= player.getGameboard().getY())
    return false;

  switch (player.getGameboard().getBoard()[x][y]) {
    case 1:
    case 2:
      return false;

    default:
      return true;
  }
}

function playerTurn(player, computer) {
  alert(`${player.getName()}'s turn!`);
  let x = 0;
  let y = 0;
  let isValid = false;

  while (!isValid) {
    x = prompt("enter x coordinate:");
    y = prompt("enter y coordinate:");

    isValid = attackValidation(computer, x, y);

    if (!isValid) alert("invalid location, try again!");
  }

  player.attack(computer, x, y);
  alert(computer.getGameboard().getMessage());
}

function computerTurn(computer, player) {
  alert(`${computer.getName()}'s turn!`);
  let x = 0;
  let y = 0;
  let isValid = false;

  while (!isValid) {
    x = pickRandomNumber(3);
    y = pickRandomNumber(3);

    isValid = attackValidation(player, x, y);
  }

  computer.attack(player, x, y);

  alert(`${computer.getName()} attack ${x},${y}`);
  alert(player.getGameboard().getMessage());
}

function gameController() {
  const players = [];
  createPlayer(players, "player", true);
  createPlayer(players, "computer");

  addShip(players[1], "destroyer", 2);
  placeShip(players[1], "destroyer", 0, 0, 0);

  let round = 0;

  while (round < 3) {
    playerTurn(players[0], players[1]);
    computerTurn(players[1], players[0]);

    round += 1;
  }

  console.log(players[1]);
}

export default gameController;
