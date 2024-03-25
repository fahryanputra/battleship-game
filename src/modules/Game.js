import Player from "./Player";

class Game {
  constructor() {
    this.players = [];
    this.winner = "";
    this.turn = "";
  }

  // Getter
  getPlayers() {
    return this.players;
  }

  getWinner() {
    return this.winner;
  }

  getTurn() {
    return this.turn;
  }

  // Setter
  setPlayers(players) {
    this.players = players;
  }

  setWinner(winner) {
    this.winner = winner;
  }

  setTurn(turn) {
    this.turn = turn;
  }
}

export default Game;
