import Ship from "../modules/Ship";

class Gameboard {
  // Gameboard legends
  // 0 = water
  // 1 = miss
  // 2 = hit

  // Gameboard axis
  // 0 = horizontal
  // 1 = vertical

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.message = "";
    this.ships = [];
    this.availableShips = [];
    this.board = [];

    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < this.x; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.y; j++) {
        this.board[i].push(0);
      }
    }
  }

  addShip(name, length) {
    const ship = new Ship(name, length);
    this.availableShips.push(ship);
    this.ships.push(ship);
  }

  placeShip(name, x, y, axis) {
    const ship = this.ships.find((element) => element.getName() === name);

    if (axis === 0) {
      for (let i = y; i < ship.length; i++) {
        this.board[x][i] = ship;
      }
    } else {
      for (let i = x; i < ship.length; i++) {
        this.board[i][y] = ship;
      }
    }
  }

  destroyIfSunk(tile) {
    if (tile.getIsSunk() === true) {
      this.availableShips = this.availableShips.filter(
        (ship) => ship.getName() !== tile.getName(),
      );
    }
  }

  receiveAttack(x, y) {
    switch (this.board[x][y]) {
      case 0:
        this.board[x][y] = 1;
        this.message = "miss";
        break;

      case 1:
      case 2:
        this.message = "invalid";
        break;

      default:
        this.board[x][y].hit();
        this.destroyIfSunk(this.board[x][y]);
        this.board[x][y] = 2;
        this.message = "hit";
        break;
    }
  }

  // Getter
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  getAvailableShips() {
    return this.availableShips;
  }

  getMessage() {
    return this.message;
  }
}

export default Gameboard;
