import { describe, expect, test } from "@jest/globals";
import Ship from "../modules/Ship";

const ship = new Ship("ship");

describe("ship class", () => {
  test("ship hit", () => {
    ship.hit();
    expect(ship.getDamage()).toBe(1);
  });

  test("ship not sunk", () => {
    ship.setLength(3);
    ship.hit();
    expect(ship.getIsSunk()).toBe(false);
  });

  test("ship sunk", () => {
    ship.setLength(1);
    ship.hit();
    expect(ship.getIsSunk()).toBe(true);
  });
});
