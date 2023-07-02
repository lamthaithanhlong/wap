const parentFunctions = (person) => {
    let coin = 3

    return () => {
        coin -= 1
        if(coin > 0) console.log(
            `${person} has ${coin} left`) 
        else console.log(`${person} is out of coins`)
    }
}
const son = parentFunctions('son')
const daughter = parentFunctions('daughter')

son()
son()
daughter()
son()
// son is out of coin
daughter()
daughter()
son()
daughter()

function outer(i=0) {
    return function inner() {
        return i++;
    }
}
let closure = outer()
console.log(closure())
console.log(closure())


function init(multiple) {
    return function (input) {
        return input * multiple
    }
}
let x3 = init(3)
let x4 = init(4)
let x5 = init(5)
let x6 = init(6)
let x7 = init(2)

console.log(x3(3))
console.log(x4(3))
console.log(x5(3))
console.log(x6(3))
console.log(x7(3))