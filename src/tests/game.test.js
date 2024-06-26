import { describe, expect, test } from "@jest/globals";
import Game from "../modules/Game";
import Player from "../modules/Player";

const players = [];

const player = new Player("player", 3);
const computer = new Player("computer", 3);
players.push(player);
players.push(computer);

const game = new Game();
game.setPlayers(players);

describe("Game class", () => {
  test("return player", () => {
    expect(game.getPlayers()[0].getName()).toBe("player");
  });

  test("return computer", () => {
    expect(game.getPlayers()[1].getName()).toBe("computer");
  });
});
