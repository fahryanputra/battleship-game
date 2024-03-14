import Gameboard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(3, 3);
    this.lose = false;
  }

  attack(player, x, y) {
    player.getGameboard().receiveAttack(x, y);
  }

  // Getter
  getName() {
    return this.name;
  }

  getGameboard() {
    return this.gameboard;
  }
}

export default Player;
