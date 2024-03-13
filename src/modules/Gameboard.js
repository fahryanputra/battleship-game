import Ship from "../modules/Ship";

class Gameboard {
  // Gameboard legends
  // 0 = water
  // 1 = miss
  // 2 = hit

  constructor(x, y) {
    this.x = x;
    this.y = y;
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

    return this.board;
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

    return this.board;
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === 0) {
      this.board[x][y] = 1;
    } else {
      this.board[x][y].hit();
      if (this.board[x][y].getIsSunk() === true) {
        this.availableShips = this.availableShips.filter(
          (ship) => ship.getName() !== this.board[x][y].getName(),
        );
      }
      this.board[x][y] = 2;
    }
    return this.board;
  }

  // Getter
  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  getAvailableShips() {
    return this.availableShips;
  }
}

export default Gameboard;
