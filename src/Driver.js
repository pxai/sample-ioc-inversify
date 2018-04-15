class Driver {
  constructor (vehicle) {
    this._vehicle = vehicle;
    this._payload = null;
  }

  get vehicle () {
    this._vehicle = vehicle;
  }

  set vehicle (vehicle) {
    this._vehicle = vehicle;
  }

  set payload(payload) {
    this._payload = payload;
  }

  showAll (){
    console.log(`Driver: ${this._vehicle.info()} load: ${this._payload.info()}`)
  }
}

module.exports = { Driver };
