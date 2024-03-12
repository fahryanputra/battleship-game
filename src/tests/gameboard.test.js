import { describe, expect, test } from "@jest/globals";
import Gameboard from "../modules/Gameboard";

const gameboard = new Gameboard(3, 3);

describe("Gameboard class", () => {
  test("create board", () => {
    expect(gameboard.getBoard()).toStrictEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
  });

  test("place ship", () => {
    gameboard.addShip("ship", 2, 0, 0, 0);
    expect(gameboard.getBoard()).toStrictEqual([
      ["ship", "ship", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
  });
});
