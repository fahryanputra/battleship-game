import Player from "./Player";

class Game {
  constructor() {
    this.players = [];
    this.winner = "";
  }

  // Getter
  getPlayers() {
    return this.players;
  }

  getWinner() {
    return this.winner;
  }

  // Setter
  setPlayers(players) {
    this.players = players;
  }

  setWinner(winner) {
    this.winner = winner;
  }
}

export default Game;
