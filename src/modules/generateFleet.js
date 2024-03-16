import generateRandomNumber from "../utilities/generateRandomNumber";

function addShip(player, ship, length = 1) {
  player.getGameboard().addShip(ship, length);
}

function placeShip(player, ship, x, y, axis = 0) {
  player.getGameboard().placeShip(ship, x, y, axis);
}

function placeShipAtRandomPosition(player, ship, size) {
  const axis = generateRandomNumber(2);
  let x = 0;
  let y = 0;

  if (axis < 1) {
    x = generateRandomNumber(size);
    y = generateRandomNumber(size - (ship.getLength() - 1));
  } else {
    x = generateRandomNumber(size - (ship.getLength() - 1));
    y = generateRandomNumber(size);
  }

  placeShip(player, ship, x, y, axis);
}

function generateFleet(player, size) {
  addShip(player, "destroyer", 2);

  const fleet = player.getGameboard().getShips();

  fleet.forEach((ship) => {
    placeShipAtRandomPosition(player, ship, size);
  });
}

export default generateFleet;
