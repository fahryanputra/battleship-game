import generateRandomNumber from "../utilities/generateRandomNumber";
import Player from "./Player";

function addShip(player, ship, length = 1) {
  player.getGameboard().addShip(ship, length);
}

function placeShip(player, ship, x, y, axis = 0) {
  player.getGameboard().placeShip(ship, x, y, axis);
}

function isEmptyTile(player, x, y) {
  const board = player.getGameboard().getBoard();

  return board[x][y] === 0 ? true : false;
}

function placeShipAtRandomPosition(player, ship) {
  const axis = generateRandomNumber(2);
  const size = player.getGameboard().getSize();
  let isInvalidPlacement = false;
  let x = 0;
  let y = 0;

  if (axis < 1) {
    x = generateRandomNumber(size);
    y = generateRandomNumber(size - (ship.getLength() - 1));

    for (let i = y; i < ship.length; i++) {
      if (isEmptyTile(player, x, i) === false) {
        isInvalidPlacement = true;
        break;
      }
    }
  } else {
    x = generateRandomNumber(size - (ship.getLength() - 1));
    y = generateRandomNumber(size);

    for (let i = x; i < ship.length; i++) {
      if (isEmptyTile(player, i, y) === false) {
        isInvalidPlacement = true;
        break;
      }
    }
  }
  if (isInvalidPlacement) {
    placeShipAtRandomPosition(player, ship);
  } else {
    placeShip(player, ship, x, y, axis);
  }
}

function generateFleet(player) {
  addShip(player, "destroyer", 2);
  addShip(player, "carrier", 3);

  const fleet = player.getGameboard().getShips();

  fleet.forEach((ship) => {
    placeShipAtRandomPosition(player, ship);
  });
}

export default generateFleet;
