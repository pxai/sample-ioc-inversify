class Vehicle {
  constructor (name) {
    this.name = name;
  }

  move () {
    console.log(`${this.name} moving...`)
  }

  info () {
    return this.name;
  }
}

module.exports = { Vehicle };
