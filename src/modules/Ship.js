class Ship {
  constructor(ship) {
    this.ship = ship;
    this.length = 0;
    this.damage = 0;
    this.isSunk = false;
  }

  evaluateSunk() {
    return typeof this.length == typeof this.damage &&
      this.length <= this.damage
      ? true
      : false;
  }

  hit() {
    this.damage += 1;
    this.isSunk = this.evaluateSunk();
  }

  // Getter
  getShip() {
    return this.ship;
  }

  getLength() {
    return this.length;
  }

  getDamage() {
    return this.damage;
  }

  getIsSunk() {
    return this.isSunk;
  }

  // Setter
  setShip(ship) {
    this.ship = ship;
  }

  setLength(length) {
    this.length = length;
  }

  setDamage(damage) {
    this.damage = damage;
  }
}

export default Ship;
