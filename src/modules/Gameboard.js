import Ship from "../modules/Ship";

class Gameboard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.board = [];

    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < this.x; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.y; j++) {
        this.board[i].push(".");
      }
    }
  }

  addShip(name, length, x, y, axis) {
    if (axis === 0) {
      for (let i = y; i < length; i++) {
        this.board[x][i] = name;
      }
    } else {
      for (let i = x; i < length; i++) {
        this.board[i][y] = name;
      }
    }
  }

  // Getter
  getBoard() {
    return this.board;
  }

  getPosition() {
    return [this.positionX, this.positionY];
  }
}

export default Gameboard;
