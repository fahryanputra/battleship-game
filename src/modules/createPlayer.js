import Player from "./Player";

function createPlayer(name, isBot = false) {
  const player = new Player(name, isBot);

  return player;
}

export default createPlayer;
