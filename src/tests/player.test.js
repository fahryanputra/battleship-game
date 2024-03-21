import { describe, expect, test } from "@jest/globals";
import Player from "../modules/Player";

const play = new Player("play");
const com = new Player("com");

describe("Player class", () => {
  test("create player", () => {
    expect(play.getName()).toBe("play");
  });

  test("player board", () => {
    expect(play.getGameboard().getBoard().length).toBe(10);
  });

  test("player attack", () => {
    play.attack(com, 0, 0);
    expect(com.getGameboard().getBoard()[0][0]).toBe(1);
  });

  test("add ship to player", () => {
    play.getGameboard().addShip("destroyer", 2);
    expect(play.getGameboard().getShips().length).toBe(1);
    expect(com.getGameboard().getShips().length).toBe(0);
  });
});
