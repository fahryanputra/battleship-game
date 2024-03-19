import Player from "./Player";

function createPlayer(name, size) {
  const player = new Player(name, size);

  return player;
}

export default createPlayer;
