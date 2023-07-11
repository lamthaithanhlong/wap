// for...in loop
let animal = {
    eats: true
}
let rabbit = Object.create(animal)
rabbit.jumps = true

// Object.keys only return own keys
console.log(Object.keys(rabbit))
console.log(rabbit)

for(let prop in rabbit) console.log(prop)


// operator "new"
// create new user
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack")
console.log(user.name)
console.log(user.isAdmin)


// new User(...)
function User(name) {
    // this = {} (implicitly)
    // add properties to this
    this.name = name
    this.isAdmin = false

    // return  this; implicitly
}

// we create the new object user
let user1 = new User('Thao')

console.log(user1)
// deep copies
let a = {...user1}
// Shallow copies
let b = user1
console.log(a)
console.log(b)

// deep copies
let arr = [1,2]
const x = [...arr]


// we use Propertype for constructor function or create new object
let user2 =  new User('Wiliam')
let user3 =  new User('John')

// Demo do not you prototype directly
function Rabbit() {}
/* default prototype */
Rabbit.prototype = { constructor: Rabbit }

let rabbit2 =  new Rabbit.constructor("Black")
console.log(rabbit2)

function Rabbit() {}
Rabbit.prototype = { 
    jumps: true 
}
let rabbit3 = new Rabbit();
console.log(rabbit3.constructor === Rabbit)