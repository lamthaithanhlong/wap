// Write a function that returns the Fibonacci sequence up to a given number of terms.
// Example:

// Input: num = 6
// Output: [0, 1, 1, 2, 3, 5]
const num = 6
function fibonacciSequence(num) {
    let arr = []
    let next = 0
    for(let i = 0; i < num; i++) {
        if(next < i) {
            next = i
        }
        arr.push(next) 
    }
    return arr
}

console.log(fibonacciSequence(num))