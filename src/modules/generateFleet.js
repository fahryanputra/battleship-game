import generateRandomNumber from "../utilities/generateRandomNumber";

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

    for (let i = 0; i < ship.getLength(); i++) {
      if (isEmptyTile(player, x, y + i) === false) {
        isInvalidPlacement = true;
        break;
      }
    }
  } else {
    x = generateRandomNumber(size - (ship.getLength() - 1));
    y = generateRandomNumber(size);

    for (let i = 0; i < ship.getLength(); i++) {
      if (isEmptyTile(player, x + i, y) === false) {
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
  addShip(player, "submarine", 1);
  addShip(player, "submarine", 1);
  addShip(player, "submarine", 1);
  addShip(player, "destroyer", 2);
  addShip(player, "destroyer", 2);
  addShip(player, "destroyer", 3);
  addShip(player, "cruiser", 3);
  addShip(player, "cruiser", 3);
  addShip(player, "battleship", 4);

  const fleet = player.getGameboard().getShips();

  fleet.forEach((ship) => {
    placeShipAtRandomPosition(player, ship);
  });
}

export default generateFleet;
