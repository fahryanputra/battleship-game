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
    return this.ships.push(new Ship(name, length));
  }

  placeShip(name, x, y, axis) {
    let ship = "";
    this.ships.forEach((element) => {
      if (element.getName() === name) {
        ship = element;
      }
    });

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
}

export default Gameboard;
