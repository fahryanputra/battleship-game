import generateRandomNumber from "../utilities/generateRandomNumber";

function addShip(player, name, length = 1) {
  player.getGameboard().addShip(name, length);
}

function placeShip(player, name, x, y, axis = 0) {
  player.getGameboard().placeShip(name, x, y, axis);
}

function placeShipAtRandomPosition(player, name) {
  const axis = generateRandomNumber(2);
  let x = 0;
  let y = 0;

  if (axis < 1) {
    x = generateRandomNumber(3);
    y = generateRandomNumber(2);
  } else {
    x = generateRandomNumber(2);
    y = generateRandomNumber(3);
  }

  console.log(axis);
  console.log(`${x}, ${y}`);

  placeShip(player, name, x, y, axis);
}

function generateFleet(player) {
  addShip(player, "destroyer", 2);
  placeShipAtRandomPosition(player, "destroyer");
}

export default generateFleet;
