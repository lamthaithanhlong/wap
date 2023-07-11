class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    set setModel(model) {
        this.model = model;
    }
    set setMake(make) {
        this.make = make;
    }
    set setYear(year) {
        this.year = year;
    }
    get getMake() {
        return this.make;
    }
    get getModel() {
        return this.model;
    }
    get getYear() {
        return this.year;
    }
    start() {
        return "started"
    }
}

class Car extends Vehicle {
    constructor(make,model,year,numDoors) {
        super(make,model,year)
        this.numDoors = numDoors
    }
    set setNumDoors(numDoors) {
        this.numDoors = numDoors
    }
    get getNumDoors() {
        return this.numDoors
    }
    openTrunk() {
        return "open trunk"
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year,numWheels) {
        super(make,model,year)
        this.numWheels = numWheels
    }
    set setNumWheels(numWheels) {
        this.numWheels = numWheels
    }
    get getNumWheels() {
        return this.numWheels
    }
    popWheelie() {
        return "a wheelie has been popped"
    }
}

let vehicle = new Vehicle("A","B","C")
let car = new Car("A1","A2","A3",3)
let motor = new Motorcycle("A1","A2","A3",3)

console.log(vehicle)
console.log(car)
console.log(motor)