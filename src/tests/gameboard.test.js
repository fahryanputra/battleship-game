import { describe, expect, test } from "@jest/globals";
import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

const gameboard = new Gameboard(3, 3);
const ship = new Ship("ship", 2);

gameboard.addShip("ship", 2);

describe("Gameboard class", () => {
  test("create board", () => {
    expect(gameboard.getBoard()).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("place ship", () => {
    gameboard.placeShip("ship", 0, 0, 0);
    expect(gameboard.getBoard()).toStrictEqual([
      [ship, ship, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("record missed shot", () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.getBoard()).toStrictEqual([
      [ship, ship, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  test("record ship hit", () => {
    gameboard.receiveAttack(0, 0);
    ship.hit();
    expect(gameboard.getShips()[0].getDamage()).toBe(1);
    expect(gameboard.getBoard()).toStrictEqual([
      [2, ship, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });
});
