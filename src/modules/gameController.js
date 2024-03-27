import generateFleet from "./generateFleet";
import createPlayer from "./createPlayer";

function gameController(game) {
  const player = createPlayer("player");
  const computer = createPlayer("computer", true);
  const players = [player, computer];

  game.setPlayers(players);
  game.setTurn(players[0]);

  players.forEach((player) => {
    generateFleet(player);
  });
}

export default gameController;
