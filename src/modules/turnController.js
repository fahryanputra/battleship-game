import generateRandomNumber from "../utilities/generateRandomNumber";

const picked = [];

function attackTile(player, x, y) {
  const gameboard = player.getGameboard();

  gameboard.receiveAttack(x, y);
}

function turnController(game, x, y) {
  const player = game.getPlayers()[0];
  const computer = game.getPlayers()[1];
  let i = 0;
  let j = 0;

  attackTile(computer, x, y);

  do {
    i = generateRandomNumber(10);
    j = generateRandomNumber(10);
  } while (picked.includes(`${i}, ${j}`));

  picked.push(`${i}, ${j}`);

  attackTile(player, i, j);

  const parent = document.querySelector(`.board.player .grid-${i}-${j}`);
  parent.classList.add(player.getGameboard().getAttackMessage());
}

export default turnController;
