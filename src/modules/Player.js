import Gameboard from "./Gameboard";

class Player {
  constructor(name, isBot = false) {
    this.name = name;
    this.isBot = isBot;
    this.gameboard = new Gameboard(10);
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

  getIsBot() {
    return this.isBot;
  }

  getLose() {
    return this.gameboard.getIsAllShipSunk();
  }
}

export default Player;
