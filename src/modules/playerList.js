import Player from "./Player";

function createPlayer(name, size) {
  return new Player(name, size);
}

function playerList(size) {
  const players = [];

  const player = createPlayer("player", size);
  const computer = createPlayer("computer", size);

  players.push(player);
  players.push(computer);

  return players;
}

export default playerList;
