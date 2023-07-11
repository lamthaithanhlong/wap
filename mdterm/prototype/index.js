function Vehicle(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year
}
Vehicle.prototype.make = "A1"

Vehicle.prototype.start = function() {
    return "Ok! let's  start the vehicle"
}

console.log(this)

function Car(...carArgs) {
    let [make,model,year,numDoors] = carArgs
    Vehicle.call(this, ...carArgs);
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.numDoors = 8

let car = new Car("A1","B2","C3","D4",4);

Car.prototype.OpenTrunk = function() {
    return "Let's open the trunk"
}

Car.prototype.getNumDoors = function() {
    return this.numDoors
}

function Motorcycle(...motorcyclesArgs) {
    let [make,model,year,numWheels] = motorcyclesArgs
    Vehicle.call(this,...motorcyclesArgs)
    this.numWheels = numWheels
}

Motorcycle.prototype = Object.create(Vehicle.prototype)

Motorcycle.prototype.popWheelie = function() {
    return "Pop the wheels"
}

let motor = new Motorcycle("A3","B3","C3",4)

console.log(car.toString())
console.log(car)
console.log(car.OpenTrunk())
console.log(car.start())
console.log(car.getNumDoors())

console.log(motor.popWheelie())
console.log(motor.make)