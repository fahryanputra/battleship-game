import { describe, expect, test } from "@jest/globals";
import Ship from "../modules/Ship";

const ship = new Ship("ship", 3);

describe("ship class", () => {
  test("ship hit", () => {
    ship.hit();
    expect(ship.getDamage()).toBe(1);
  });

  test("ship not sunk", () => {
    ship.hit();
    expect(ship.getIsSunk()).toBe(false);
  });

  test("ship sunk", () => {
    for (let i = 0; i < ship.length; i++) {
      ship.hit();
    }
    expect(ship.getIsSunk()).toBe(true);
  });
});
