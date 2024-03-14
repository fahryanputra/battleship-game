import { describe, expect, test } from "@jest/globals";
import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

const gameboard = new Gameboard(3, 3);
const destroyer = new Ship("destroyer", 2);
const cruiser = new Ship("cruiser", 3);

gameboard.addShip("destroyer", 2);
gameboard.addShip("cruiser", 3);

describe("Gameboard class", () => {
  test("create board", () => {
    expect(gameboard.getBoard()).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("place ship", () => {
    gameboard.placeShip("destroyer", 0, 0, 0);
    expect(gameboard.getBoard()).toStrictEqual([
      [destroyer, destroyer, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("place another ship", () => {
    gameboard.placeShip("cruiser", 0, 2, 1);
    expect(gameboard.getBoard()).toStrictEqual([
      [destroyer, destroyer, cruiser],
      [0, 0, cruiser],
      [0, 0, cruiser],
    ]);
  });

  test("record missed shot", () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.getBoard()).toStrictEqual([
      [destroyer, destroyer, cruiser],
      [0, 1, cruiser],
      [0, 0, cruiser],
    ]);
  });

  test("record ship hit", () => {
    gameboard.receiveAttack(0, 0);
    destroyer.hit();
    expect(gameboard.getShips()[0].getDamage()).toBe(1);
    expect(gameboard.getBoard()).toStrictEqual([
      [2, destroyer, cruiser],
      [0, 1, cruiser],
      [0, 0, cruiser],
    ]);
  });

  test("sunk ship", () => {
    gameboard.receiveAttack(0, 1);
    destroyer.hit();
    expect(gameboard.getBoard()).toStrictEqual([
      [2, 2, cruiser],
      [0, 1, cruiser],
      [0, 0, cruiser],
    ]);
    expect(gameboard.getShips()[0].getDamage()).toBe(2);
    expect(gameboard.getShips()[0].getIsSunk()).toBe(true);
    expect(gameboard.getAvailableShips().length).toBe(1);
  });

  test("attack miss message", () => {
    gameboard.receiveAttack(2, 0);
    expect(gameboard.getMessage()).toBe("miss");
  });

  test("attack hit message", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.getMessage()).toBe("hit");
  });

  test("attack invalid message", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.getMessage()).toBe("invalid");
  });
});
