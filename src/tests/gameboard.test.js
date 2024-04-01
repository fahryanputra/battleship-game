import { describe, expect, test } from "@jest/globals";
import Gameboard from "../modules/Gameboard";

const gameboard = new Gameboard(10);

gameboard.addShip("destroyer", 2);
gameboard.addShip("cruiser", 3);

const fleet = gameboard.getShips();

describe("Gameboard class", () => {
  test("create board", () => {
    expect(gameboard.getBoard()).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check ship object", () => {
    expect(gameboard.getShips()[0]).toMatchSnapshot({
      name: "destroyer",
    });
  });

  test("place ship", () => {
    gameboard.placeShip(fleet[0], 0, 0, 0);
    for (let index = 0; index < fleet[0].getLength(); index++) {
      expect(gameboard.getBoard()[0][index]).toMatchSnapshot({
        name: "destroyer",
      });
    }
  });

  test("place another ship", () => {
    gameboard.placeShip(fleet[1], 0, 2, 1);
    for (let index = 0; index < fleet[1].getLength(); index++) {
      expect(gameboard.getBoard()[index][2]).toMatchSnapshot({
        name: "cruiser",
      });
    }
  });

  test("record missed shot", () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.getBoard()[1][1]).toBe(1);
  });

  test("record ship hit", () => {
    gameboard.receiveAttack(0, 0);
    expect(fleet[0].getDamage()).toBe(1);
    expect(gameboard.getBoard()[0][0]).toBe(2);
  });

  test("sunk ship", () => {
    gameboard.receiveAttack(0, 1);
    expect(gameboard.getBoard()[0][1]).toBe(2);
    expect(fleet[0].getDamage()).toBe(2);
    expect(fleet[0].getIsSunk()).toBe(true);
    expect(gameboard.getSunkMessage()).toBe("destroyer has been sunk");
    expect(gameboard.getAvailableShips().length).toBe(1);
  });

  test("attack miss message", () => {
    gameboard.receiveAttack(2, 0);
    expect(gameboard.getAttackMessage()).toBe("miss");
  });

  test("attack hit message", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.getAttackMessage()).toBe("hit");
  });

  test("attack invalid message", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.getAttackMessage()).toBe("invalid");
  });

  test("all ship sunk", () => {
    gameboard.receiveAttack(1, 2);
    gameboard.receiveAttack(2, 2);
    expect(gameboard.getIsAllShipSunk()).toBe(true);
  });
});
