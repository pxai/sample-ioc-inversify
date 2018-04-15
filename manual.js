const { Payload } = require('./src/Payload');
const { Vehicle } = require('./src/Vehicle');
const { Driver } = require('./src/Driver');

const payload = new Payload('A little Box');
const vehicle = new Vehicle(payload, 'Renault Kangoo');
const driver = new Driver(vehicle);

console.log(vehicle);
console.log(driver);
