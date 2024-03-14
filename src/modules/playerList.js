import Player from "./Player";

function createPlayer(name, isPlayer = false) {
  return new Player(name, isPlayer);
}

function playerList() {
  const players = [];

  const player = createPlayer("player", true);
  const computer = createPlayer("computer");

  players.push(player);
  players.push(computer);

  return players;
}

export default playerList;
