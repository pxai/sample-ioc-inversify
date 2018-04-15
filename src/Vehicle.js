class Vehicle {
  constructor (name="", payload) {
    this.name = name;
    this.payload = payload;
  }

  move () {
    console.log(`${this.name} moving...`)
  }

  info () {
    return this.name;
  }
}

module.exports = { Vehicle };
