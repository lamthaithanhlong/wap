console.log(5 + "5" - 1)
let x = 5
console.log(++x + x++)
console.log("2" * "3" + 1)
console.log("10"/2)
console.log(2 + "3" - 1);
console.log("10" + 20 - 10);
console.log("2" + "3" + 1);
console.log("10" - "5");
let x1 = 5
console.log(x1++ + ++x1)
console.log("10" - 1)
console.log(1 + "2" * 2);
console.log("10" + "20" - "30");
let x2 = "5";
console.log(x2++ + x2);
console.log(true + false);
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(null + 1);
console.log(undefined + 1);
console.log([] + {});
console.log([] + []);
console.log({} + []);
console.log({} == {});
console.log([] - 1);
console.log(true - 1)
console.log(2 - true);
console.log(undefined - 1);
console.log(1 + null + undefined);
console.log(1 - null - undefined);
console.log("1" - null - undefined);
console.log("1" - "1");
console.log("five" - 2);
console.log(NaN === NaN);
console.log(+"");
console.log(1 / 0);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof typeof 1);
console.log(0.1 + 0.2 === 0.3);
console.log([] == ![]);
console.log("5" - 1);
console.log("5" + 1);
console.log(1 + "5" - 1);
console.log(2 + "2" - 1);
console.log(true + 1);
console.log(null == undefined);
console.log(undefined == undefined);
console.log(NaN == undefined);
console.log(typeof undefined)
console.log(typeof null)
console.log([] == "");
console.log("" == 0);
console.log([] == 0);
console.log(0 == false);
console.log(0 == false);
console.log(null == false);
console.log(undefined == false);
console.log(null == 0);

function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = {
    name: 'Alice'
  };
  
    greet.call(person, 'Bob');
//   boundGreet();
  
const person1 = {
  name: 'John',
  sayName: () => {
      console.log(this.name);
  }
};

person1.sayName();

console.log("============")

function sayName() {
  return this.name;
}

const person2 = {
  name: 'John',
  sayHi() {
    console.log("hiiii")
    return "hi"
  }
};

function parent() {}
function child() {}

child.prototype = Object.create(parent.prototype);

console.log(child.prototype.constructor === parent)
console.log(child.prototype.constructor !== child)

console.log(sayName.call(person2));
console.log(sayName.bind(person2))
person2.sayHi.bind(person2)
setTimeout(() => person2.sayHi.bind(person2), 2000)