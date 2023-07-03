"use strict"

let user = {
    fristName: "John",
    sayHi() {
        console.log("My name is: "+`${this.fristName}`)
    }
}

function callMethodUser() {
    sayHi();
}
const f = () => user.sayHi();
setTimeout(f,10)

// work
setTimeout(() => user.sayHi(), 1000)

// work and not print on console
setTimeout(() => user.sayHi.bind(user),1000)

// work
setTimeout(() => user.sayHi.call(user),1000)

function clickedOnButton() {
    alert("you clicked")
}