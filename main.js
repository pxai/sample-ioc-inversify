const inversify = require("inversify");
require("reflect-metadata");

const TYPES = {
    Driver: "Driver",
    Vehicle: "Vehicle",
    Payload: "Payload"
};

const { Driver } = require('./src/Driver');
const { Vehicle } = require('./src/Vehicle');
const { Payload } = require('./src/Payload');

inversify.decorate(inversify.injectable(), Driver);
inversify.decorate(inversify.injectable(), Vehicle);
inversify.decorate(inversify.injectable(), Payload);
inversify.decorate(inversify.inject(TYPES.Payload), Vehicle, 0);
inversify.decorate(inversify.inject(TYPES.Vehicle), Driver, 0);

const container = new inversify.Container();
container.bind(TYPES.Driver).to(Driver);
container.bind(TYPES.Vehicle).to(Vehicle);
container.bind(TYPES.Payload).to(Payload);


console.log(container.get(TYPES.Payload));
console.log(container.get(TYPES.Vehicle));
console.log(container.get(TYPES.Driver));
