import { describe, expect, test } from "@jest/globals";
import Player from "../modules/Player";

const size = 3;
const player = new Player("player", size);
const computer = new Player("computer", size);

describe("Player class", () => {
  test("create player", () => {
    expect(player.getName()).toBe("player");
  });

  test("player board", () => {
    expect(player.getGameboard().getBoard()).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("player attack", () => {
    player.attack(computer, 0, 0);
    expect(computer.getGameboard().getBoard()).toStrictEqual([
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("add ship to player", () => {
    player.getGameboard().addShip("destroyer", 2);
    expect(player.getGameboard().getShips().length).toBe(1);
    expect(computer.getGameboard().getShips().length).toBe(0);
  });
});
