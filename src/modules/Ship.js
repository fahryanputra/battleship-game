class Ship {
  constructor(name, length = 1) {
    this.name = name;
    this.length = length;
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
  getName() {
    return this.name;
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
  setName(name) {
    this.name = name;
  }

  setLength(length) {
    this.length = length;
  }
}

export default Ship;
