class Payload {
  constructor (name='Default') {
    this.name = name;
  }

  info () {
    return this.name;
  }
}

module.exports = { Payload };
