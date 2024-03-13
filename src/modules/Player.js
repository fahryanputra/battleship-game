import Gameboard from "./Gameboard";

class Player {
  constructor(name, isTurn = false) {
    this.name = name;
    this.isTurn = isTurn;
    this.gameboard = new Gameboard(3, 3);
  }

  attack(player, x, y) {
    player.getGameboard().receiveAttack(x, y);
    this.isTurn = false;
  }

  // Getter
  getName() {
    return this.name;
  }

  getGameboard() {
    return this.gameboard;
  }

  getIsTurn() {
    return this.isTurn;
  }
}

export default Player;
