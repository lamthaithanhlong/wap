function a() {
    function b() {}
    return b
}
console.log(a)


function foo(y) {
    return function bar(z) { 
        return x+y+z;
    }
}

let x=1
let f = foo(2)
console.dir(f)
f(3)
console.log(f(3))

// synchonous and asynonous
// synchonous
function call(number) {
    let sum = number
    for(let i=0; i<1e9; i++) {
        sum+=i;
    }
    console.log(number)
}

setTimeout(call,500,2)
console.log("waiting")
console.log(1)
console.log("waiting again")
call(2)
console.log(5)
// let timeID = setInterval(console.log(()=> {console.log('run call back')},1000)