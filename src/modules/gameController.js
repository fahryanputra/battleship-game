import Player from "./Player";

function gameController() {
  const player = new Player("player", true);
  const computer = new Player("computer");
  computer.getGameboard().addShip("destroyer");
  computer.getGameboard().placeShip("destroyer", 0, 0, 0);

  const players = [];
  players.push(player);
  players.push(computer);
}

export default gameController;
