import Gameboard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(3);
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

  getLose() {
    return this.gameboard.getIsAllShipSunk();
  }
}

export default Player;
