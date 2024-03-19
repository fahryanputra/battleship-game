import Gameboard from "./Gameboard";

class Player {
  constructor(name, size = 3) {
    this.name = name;
    this.gameboard = new Gameboard(size);
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
